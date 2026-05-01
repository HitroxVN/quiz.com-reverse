# quiz.com-reverse

A  tool for inspecting [Quiz API](https://quiz.com/api/quiz/) responses and understanding quiz data structures.

## Overview

`quiz.com-reverse` is a browser-based script designed to analyze network responses from [Quiz](https://quiz.com/) and extract structured quiz data such as questions, answer options, and metadata.

This tool focuses on **API response inspection and data structure analysis**, not interaction with or modification of the [Quiz](https://quiz.com/) platform.

## Features

- Extract quiz ID from active Quiz session
- Fetch quiz data via API endpoint
- Parse and display:
  - Questions
  - Answer options
  - Correct answers
- Clean console output for debugging and analysis

## Usage

1. Open a Quiz game in https://quiz.com/play/your-id/
2. Open Developer Console [Ctrl+Shift+J]
3. Paste the script from this repository
```javascript
fetch("https://raw.githubusercontent.com/HitroxVN/quiz.com-reverse/refs/heads/main/main.min.js")
    .then((res) => res.text()
    .then((t) => eval(t)))
```
4. View parsed quiz data in the console

## Example Output
![App Screenshot](https://github.com/HitroxVN/quiz.com-reverse/blob/main/images/ScreenShot.png?raw=true)

## Try UI version
- Paste the script from this repository
```javascript
fetch("https://raw.githubusercontent.com/HitroxVN/quiz.com-reverse/refs/heads/main/bundle.js")
    .then((res) => res.text()
    .then((t) => eval(t)))
```

<p align="center">
  <img src="https://github.com/HitroxVN/quiz.com-reverse/blob/main/images/ScreenShot1.png?raw=true" width="45%" />
  <img src="https://github.com/HitroxVN/quiz.com-reverse/blob/main/images/ScreenShot2.png?raw=true" width="45%" />
</p>