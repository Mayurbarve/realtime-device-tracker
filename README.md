# Real-Time Device Tracker

A backend project for tracking devices in real-time using Express, EJS, Socket.IO, and OpenStreetMap.
<br/>
![Map-2](https://github.com/user-attachments/assets/f5220732-070a-4bb6-ae28-e5e2df263438)
<br/>
![Map-1](https://github.com/user-attachments/assets/7a9b06b9-f401-4b19-a4ad-7177065eda01)

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Introduction

**Real-Time Device Tracker** is a backend application that enables real-time device tracking on a map interface. It leverages Socket.IO for real-time communication, OpenStreetMap for map rendering, and Express with EJS for server and view templating.

## Features

- Real-time tracking of devices
- Live map rendering using OpenStreetMap
- Smooth updates and location plotting with Socket.IO
- Responsive and interactive web interface using EJS templates

## Tech Stack

- **Node.js**: JavaScript runtime environment
- **Express**: Web framework for server creation
- **Socket.IO**: Real-time, bidirectional communication
- **EJS**: Embedded JavaScript templates for generating HTML
- **OpenStreetMap**: Map rendering service for visual device tracking

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/real-time-device-tracker.git
   cd real-time-device-tracker
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
    ```bash
   npm i express
   ```
     ```bash
   npm i ejs
   ```
      ```bash
   npm i socket.io
   ```

3. **Environment Variables**:
   - Create a `.env` file in the root directory and add any required environment variables, such as API keys or port numbers.

4. **Start the server**:
   ```bash
   npm start
   ```

## Usage

1. **Access the Application**:
   - Open your browser and navigate to `http://localhost:<PORT>` (default is 3000) to see the map and device tracking in action.

2. **Add Devices**:
   - You can add or simulate device locations that will be tracked in real-time on the map.

3. **Real-Time Updates**:
   - The map updates in real-time as device locations change.

## License

This project is licensed under the MIT License.
