window.addEventListener('load', function () {
            setTimeout(function () {
                var preloader = document.getElementById('preloader');
                if (preloader) {
                    preloader.style.display = 'none';
                }
            }, 900); // 1500 milissegundos = 1,5 segundos
        });

