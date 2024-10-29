document.getElementById('love-button').addEventListener('click', function() {
    // تشغيل الصوت عند النقر على الزر
    const audio = document.getElementById('love-audio');
    audio.play().catch((error) => {
        console.log("هناك مشكلة في تشغيل الصوت:", error);
    });

    // إظهار الرسالة
    document.getElementById('message').classList.remove('hidden');
    document.getElementById('love-button').style.display = 'none'; // إخفاء الزر بعد الضغط

    // إظهار النص تدريجيًا
    const message = document.querySelector('.message-text');
    const text = message.innerHTML;
    message.innerHTML = ''; // مسح النص الأصلي
    let index = 0;

    function showLetter() {
        if (index < text.length) {
            message.innerHTML += text.charAt(index);
            index++;
            setTimeout(showLetter, 50); // تغيير السرعة هنا إذا رغبت
        }
    }

    showLetter(); // بدء عرض النص
});
