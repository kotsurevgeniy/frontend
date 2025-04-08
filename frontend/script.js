{\rtf1\ansi\ansicpg1251\cocoartf2820
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 Telegram.WebApp.ready();\
const user = Telegram.WebApp.initDataUnsafe.user || \{ id: 123, username: "TestUser" \}; // \uc0\u1044 \u1083 \u1103  \u1090 \u1077 \u1089 \u1090 \u1072 \
\
const successPhrases = [\
    '\uc0\u1058 \u1088 \u1077 \u1085 \u1080 \u1088 \u1086 \u1074 \u1082 \u1072  \u1079 \u1072 \u1075 \u1088 \u1091 \u1078 \u1077 \u1085 \u1072 ! \u1058 \u1099  \u1084 \u1086 \u1083 \u1086 \u1076 \u1077 \u1094 ! \u55357 \u56490 ',\
    '\uc0\u1054 \u1090 \u1083 \u1080 \u1095 \u1085 \u1072 \u1103  \u1088 \u1072 \u1073 \u1086 \u1090 \u1072 ! \u1044 \u1072 \u1085 \u1085 \u1099 \u1077  \u1089 \u1086 \u1093 \u1088 \u1072 \u1085 \u1077 \u1085 \u1099 ! \u55357 \u56613 ',\
    '\uc0\u1055 \u1088 \u1086 \u1075 \u1088 \u1077 \u1089 \u1089  \u1079 \u1072 \u1087 \u1080 \u1089 \u1072 \u1085 ! \u1055 \u1088 \u1086 \u1076 \u1086 \u1083 \u1078 \u1072 \u1081  \u1074  \u1090 \u1086 \u1084  \u1078 \u1077  \u1076 \u1091 \u1093 \u1077 ! \u55356 \u57283 '\
];\
\
// \uc0\u1060 \u1086 \u1088 \u1084 \u1072  \u1090 \u1088 \u1077 \u1085 \u1080 \u1088 \u1086 \u1074 \u1082 \u1080 \
function renderForm() \{\
    const form = `\
        <h2>\uc0\u1044 \u1086 \u1073 \u1072 \u1074 \u1080 \u1090 \u1100  \u1090 \u1088 \u1077 \u1085 \u1080 \u1088 \u1086 \u1074 \u1082 \u1091 </h2>\
        <input type="date" id="date" value="$\{new Date().toISOString().split('T')[0]\}">\
        <input type="time" id="time" placeholder="\uc0\u1042 \u1088 \u1077 \u1084 \u1103  \u1090 \u1088 \u1077 \u1085 \u1080 \u1088 \u1086 \u1074 \u1082 \u1080 ">\
        <input type="number" id="distance" placeholder="\uc0\u1044 \u1080 \u1089 \u1090 \u1072 \u1085 \u1094 \u1080 \u1103  (\u1082 \u1084 )" step="0.1">\
        <input type="number" id="avgSpeed" placeholder="\uc0\u1057 \u1088 \u1077 \u1076 \u1085 \u1103 \u1103  \u1089 \u1082 \u1086 \u1088 \u1086 \u1089 \u1090 \u1100 " step="0.1">\
        <input type="number" id="avgPulse" placeholder="\uc0\u1057 \u1088 \u1077 \u1076 \u1085 \u1080 \u1081  \u1087 \u1091 \u1083 \u1100 \u1089 ">\
        <input type="url" id="trackLink" placeholder="\uc0\u1057 \u1089 \u1099 \u1083 \u1082 \u1072  \u1085 \u1072  \u1090 \u1088 \u1077 \u1082 ">\
        <button onclick="submitTraining()">\uc0\u1047 \u1072 \u1075 \u1088 \u1091 \u1079 \u1080 \u1090 \u1100  \u1090 \u1088 \u1077 \u1085 \u1080 \u1088 \u1086 \u1074 \u1082 \u1091 </button>\
    `;\
    document.getElementById('form').innerHTML = form;\
\}\
\
// \uc0\u1054 \u1090 \u1087 \u1088 \u1072 \u1074 \u1082 \u1072  \u1090 \u1088 \u1077 \u1085 \u1080 \u1088 \u1086 \u1074 \u1082 \u1080 \
async function submitTraining() \{\
    const training = \{\
        user_id: user.id,\
        date: document.getElementById('date').value,\
        time: document.getElementById('time').value,\
        distance: parseFloat(document.getElementById('distance').value),\
        avg_speed: parseFloat(document.getElementById('avgSpeed').value),\
        avg_pulse: parseInt(document.getElementById('avgPulse').value),\
        track_link: document.getElementById('trackLink').value\
    \};\
    const response = await fetch('http://localhost:8000/api/trainings', \{\
        method: 'POST',\
        headers: \{ 'Content-Type': 'application/json' \},\
        body: JSON.stringify(training)\
    \});\
    if (response.ok) \{\
        Telegram.WebApp.showAlert(successPhrases[Math.floor(Math.random() * 3)]);\
        renderProfile();\
    \}\
\}\
\
// \uc0\u1051 \u1080 \u1095 \u1085 \u1099 \u1081  \u1082 \u1072 \u1073 \u1080 \u1085 \u1077 \u1090 \
async function renderProfile() \{\
    const response = await fetch(`http://localhost:8000/api/trainings?telegram_id=$\{user.id\}`);\
    const trainings = await response.json();\
    const profile = `\
        <h2>\uc0\u1052 \u1086 \u1080  \u1090 \u1088 \u1077 \u1085 \u1080 \u1088 \u1086 \u1074 \u1082 \u1080 </h2>\
        <ul>$\{trainings.map(t => `<li>$\{t.date\} - $\{t.distance\} \uc0\u1082 \u1084 </li>`).join('')\}</ul>\
    `;\
    document.getElementById('profile').innerHTML = profile;\
\}\
\
// \uc0\u1056 \u1077 \u1081 \u1090 \u1080 \u1085 \u1075 \
async function renderRating() \{\
    const response = await fetch('http://localhost:8000/api/rating');\
    const rating = await response.json();\
    const ratingHtml = `\
        <h2>\uc0\u1058 \u1086 \u1087 -5 \u1085 \u1077 \u1076 \u1077 \u1083 \u1080 </h2>\
        <ol>$\{rating.map((r, i) => `<li>$\{r.username\} - $\{r.distance\} \uc0\u1082 \u1084  $\{i < 3 ? ['\u55358 \u56647 ', '\u55358 \u56648 ', '\u55358 \u56649 '][i] : ''\}</li>`).join('')\}</ol>\
    `;\
    document.getElementById('rating').innerHTML = ratingHtml;\
\}\
\
// \uc0\u1048 \u1085 \u1080 \u1094 \u1080 \u1072 \u1083 \u1080 \u1079 \u1072 \u1094 \u1080 \u1103 \
renderForm();\
renderProfile();\
renderRating();}