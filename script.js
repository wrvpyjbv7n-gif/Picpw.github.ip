/* ===== RESET ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}
body {
    font-family: "Sarabun", "Tahoma", sans-serif;
    background: #f5f3ee;
    color: #263445;
    line-height: 1.8;
}
/* ===== HEADER ===== */
header {
    min-height: 400px;
    background: linear-gradient(135deg, #101f35, #243d5a);
    color: white;
    text-align: center;
    padding: 100px 20px;
    border-bottom: 5px solid #c9a45c;
}
header h1 {
    font-size: 65px;
    letter-spacing: 8px;
    color: #d8b878;
    font-weight: bold;
}
header h2 {
    font-size: 32px;
    letter-spacing: 3px;
    margin: 10px 0;
}
header p {
    font-size: 17px;
    color: #e0e0e0;
}
/* ===== SECTION ===== */
section {
    max-width: 1000px;
    margin: 55px auto;
    padding: 45px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 20px rgba(0,0,0,0.06);
}
/* ===== SECTION TITLE ===== */
section h2 {
    color: #172c45;
    font-size: 27px;
    margin-bottom: 25px;
    padding-bottom: 12px;
    border-bottom: 3px solid #c9a45c;
    position: relative;
}
section h2::before {
    content: "";
    position: absolute;
    width: 65px;
    height: 3px;
    background: #172c45;
    bottom: -3px;
    left: 0;
}
/* ===== PROFILE ===== */
#about {
    text-align: center;
}
.profile-img {
    width: 190px;
    height: 230px;
    object-fit: cover;
    border-radius: 12px;
    border: 5px solid #c9a45c;
    margin-bottom: 20px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.15);
}
#about p {
    text-align: left;
    max-width: 700px;
    margin: 8px auto;
    padding: 10px 15px;
    background: #f5f3ee;
    border-left: 4px solid #c9a45c;
    border-radius: 5px;
}
/* ===== CARD ===== */
.card {
    background: #faf9f6;
    padding: 25px;
    margin: 18px 0;
    border-radius: 10px;
    border-left: 5px solid #c9a45c;
    transition: 0.3s ease;
}
.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(23,44,69,0.12);
    background: #fff;
}
.card h3 {
    color: #172c45;
    font-size: 21px;
    margin-bottom: 10px;
}
.card p {
    color: #555;
}
/* ===== SKILLS ===== */
.card ul {
    padding-left: 25px;
}
.card li {
    padding: 4px 0;
    color: #555;
}
.card li::marker {
    color: #c9a45c;
}
/* ===== MOTIVATION ===== */
#motivation,
#goal {
    background: #172c45;
    color: white;
    border-top: 4px solid #c9a45c;
}
#motivation h2,
#goal h2 {
    color: #d8b878;
}
#motivation p,
#goal p {
    font-size: 17px;
    text-align: justify;
    line-height: 2;
    color: #f0f0f0;
}
/* ===== FOOTER ===== */
footer {
    background: #101f35;
    color: white;
    text-align: center;
    padding: 40px 20px;
    border-top: 5px solid #c9a45c;
}
footer h2 {
    color: #d8b878;
    font-size: 28px;
    margin-bottom: 15px;
}
footer p {
    margin: 8px 0;
    color: #ddd;
}
/* ===== ANIMATION ===== */
section {
    animation: fadeIn 0.8s ease;
}
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
/* ===== RESPONSIVE MOBILE ===== */
@media screen and (max-width: 768px) {
    header {
        padding: 75px 15px;
        min-height: 320px;
    }
    header h1 {
        font-size: 42px;
        letter-spacing: 4px;
    }
    header h2 {
        font-size: 23px;
    }
    header p {
        font-size: 14px;
    }
    section {
        margin: 25px 12px;
        padding: 25px 20px;
    }
    section h2 {
        font-size: 22px;
    }
    .profile-img {
        width: 160px;
        height: 200px;
    }
    .card {
        padding: 18px;
    }
    .card h3 {
        font-size: 18px;
    }
    #motivation p,
    #goal p {
        font-size: 15px;
    }
}
/* ===== SMALL SCREEN ===== */
@media screen and (max-width: 400px) {
    header h1 {
        font-size: 34px;
    }
    header h2 {
        font-size: 19px;
    }
    section {
        padding: 20px 15px;
    }
}
