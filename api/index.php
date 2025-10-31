<?php
header("Access-Control-Allow-Origin: http://localhost:4321"); // your Astro dev server
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Access-Control-Allow-Credentials: true");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Google Form "formResponse" URL
$url = "https://docs.google.com/forms/u/0/d/e/1FAIpQLSearXBioHjN7YS1e_h1iViav8lgXHU2AamlNK2_knJ4mkreKw/formResponse";

// Map Google Form fields (entry IDs)
$data = [
    "entry.616558192" => $_POST['fullname'], // fullname
    "entry.1017553645" => $_POST['nickname'],                  // nickname
    "entry.1300502435" => $_POST['email'],    // email
    "entry.724225848" => $_POST['whatsapp'],           // whatsapp
    "entry.2123243756" => $_POST['message']   // message
];

// Send POST request
$options = [
    "http" => [
        "header"  => "Content-type: application/x-www-form-urlencoded\r\n",
        "method"  => "POST",
        "content" => http_build_query($data),
    ],
];
$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

if ($result === FALSE) {
    echo "Error submitting form.";
} else {
    echo "Form submitted successfully!";
}

// $jsonData = json_encode($_POST);

// // Output JSON
// header('Content-Type: application/json');
// echo $jsonData;