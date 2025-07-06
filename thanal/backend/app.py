import base64
import os
import google.generativeai as genai
from pydub import AudioSegment
import io
import json  
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Configure Gemini API
genai.configure(api_key="AIzaSyAkGVJB36ik2xmUOBjATEk07RAwaouywFg")
model = genai.GenerativeModel('gemini-2.0-flash')  # Use a text model for now

@app.route('/upload', methods=['POST'])
def upload():
    text1 = request.form['text1']
    text2 = request.form['text2']
    text3 = request.form['text3']
    audio_file = request.files['audio']

    # Save the audio file
    audio_file.save(f"./{audio_file.filename}")

    return {
        "message": "Received successfully",
        "text1": text1,
        "text2": text2,
        "text3": text3,
        "audio_file": audio_file.filename
    }

def clean_json_response(text):
    """
    Clean Gemini's response by stripping markdown code block markers.
    """
    if text.strip().startswith("```"):
        # Remove markdown-style code block
        text = text.strip().lstrip("```json").lstrip("```").rstrip("```").strip()
    return text

@app.route("/summarize", methods=["GET", "POST"])
def summarize():
    audio_file_path = "./audios/audio2.wav"
    try:
        # Load and encode audio
        audio = AudioSegment.from_wav(audio_file_path)
        buffer = io.BytesIO()
        audio.export(buffer, format="wav")
        audio_bytes = buffer.getvalue()
        audio_base64 = base64.b64encode(audio_bytes).decode('utf-8')

        # Prepare Gemini input
        contents = [
            {
                'mime_type': 'audio/wav',
                'data': audio_base64
            },
            {
                'text': """
This is a conversation between a doctor and a patient.
Extract the important points and return ONLY valid JSON in this format (arrays for each field):
{
    "Causes": [], 
    "Symptoms": [], 
    "ExaminationFindings": [], 
    "PrescribedTests": [], 
    "PrescribedMedications": [], 
    "Others": []
}
- Return multiple items in the arrays if applicable.
- If no information is present for a field, leave the array empty.
- Return only the JSON object. No markdown or explanation.
"""
            }
        ]

        # Call Gemini API
        response = model.generate_content(contents)
        cleaned_text = clean_json_response(response.text)

        # Parse response text as JSON
        try:
            structured_data = json.loads(cleaned_text)
            print("✅ Structured JSON Response:", structured_data)
            return structured_data
        except json.JSONDecodeError:
            print("⚠️ Gemini response was not valid JSON after cleanup.")
            print("Raw response text:", cleaned_text)
            fallback_json = {
                "Causes": [], 
                "Symptoms": [], 
                "ExaminationFindings": [], 
                "PrescribedTests": [], 
                "PrescribedMedications": [], 
                "Others": []
            }
            return {"error": "Invalid JSON from Gemini", "fallback": fallback_json, "raw_response": cleaned_text}

    except Exception as e:
        print(f"❌ An error occurred: {e}")
        return {"error": str(e)}

if __name__ == "__main__":
    app.run(debug=True)