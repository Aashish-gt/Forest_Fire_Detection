# Forest_Fire_Detection
# 🔥 Fire Detection Using TinyML

This project trains a lightweight fire detection model using TensorFlow and converts it to a TFLite model suitable for embedded devices like ESP32-CAM.

## 📁 Folder Structure

forestfire_detection/
├── dataset/
│ ├── fire/
│ └── nofire/
├── preprocessing.ipynb
├── training.ipynb
├── requirements.txt


## 📦 Setup Instructions

# Clone and move into folder
git clone https://github.com/your-username/fire-detection-tinyml.git
cd fire-detection-tinyml

# Create virtual environment (optional)
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
