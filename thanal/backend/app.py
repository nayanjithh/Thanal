import base64
import os
import google.generativeai as genai
from pydub import AudioSegment
import io
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

# Configure Gemini API
genai.configure(api_key="AIzaSyAkGVJB36ik2xmUOBjATEk07RAwaouywFg")
model = genai.GenerativeModel('gemini-1.5-pro')  # Use a text model for now

@app.route("/summarize", methods=["POST"])
def summarize():
    if "audio" not in request.files:
        return jsonify({"error": "No audio file uploaded"}), 400

    audio_file = request.files["audio"]

    try:
        transcribed_text = "This is a placeholder transcription of the audio conversation."
        prompt = f"""
        This is a conversation between a doctor and a patient: 
        {transcribed_text}
        Structure the important points from the conversation into a JSON format:
        {{
            "Causes": "", 
            "Symptoms": "", 
            "ExaminationFindings": "", 
            "PrescribedTests": "", 
            "PrescribedMedications": "", 
            "Others": ""
        }}
        """

        response = model.generate_content(prompt)
        return jsonify({"summary": response.text})

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)