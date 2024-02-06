document.addEventListener("DOMContentLoaded", function () {
    var Log = document.getElementById('m_userLogin_mainLog');

    let currentPage = 1;

    function showNextPage() {
        document.getElementById(`m_userLogin_2page${currentPage}`).style.opacity = '0';
        setTimeout(function () {
            document.getElementById(`m_userLogin_2page${currentPage}`).style.display = 'none';
            currentPage++;
            document.getElementById(`m_userLogin_2page${currentPage}`).style.display = 'block';
            document.getElementById(`m_userLogin_2page${currentPage}`).style.opacity = '1';
            checkFormValidity();
        }, 500);
    }
    document.getElementById('m_userLogin_2goToPage2').addEventListener('click', (event) =>{
        Log.style.transition = '0.4s';
        Log.style.width = '140px';
        Log.style.height = '140px';
    });

    document.getElementById('m_userLogin_2goToPage2').addEventListener('click', function () {
        showNextPage();
    });

    document.getElementById('m_userLogin_2page1').classList.add('active');
    document.getElementById('m_userLogin_2page1').style.transition = '0.4s';
    document.getElementById('m_userLogin_2page1').style.opacity = '1';
    document.getElementById('m_userLogin_2page2').style.transition = '0.4s';
    document.getElementById('m_userLogin_2page2').style.opacity = '1';
});
