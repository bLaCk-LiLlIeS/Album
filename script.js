const panels = document.querySelectorAll('img');

        panels.forEach(panels=>{
            panels.addEventListener('click',()=>{
                removeActive();
                panels.classList.add('active')
                panels.classList.remove('main')
            })
        })

        function removeActive(){
            panels.forEach(panels=>{
                panels.classList.remove('active');
            })
        }
