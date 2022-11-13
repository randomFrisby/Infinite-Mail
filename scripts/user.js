
    let bar = document.getElementById('threelines')
    bar.addEventListener('click', () => {
        let sidepanel = document.getElementById('sidepanel')
        let check = sidepanel.style.display == 'block'
        sidepanel.style.display = check ? 'none' : 'block';

        let mainpanel = document.getElementById('mainpanel')
        let see = mainpanel.style.width == '84%'
        mainpanel.style.width = see ? '100%' : '84%';
    })

    //---------appear and disapper effect of menu-subcomponents------------------    
    let menu = document.querySelectorAll('.menu-components')
    menu.forEach((el, i) => {
        el.addEventListener('click', () => {
            for (let j = 0; j < 6; j++) {
                if (i == j) {
                    document.getElementById(j).style.display = 'block';
                    //console.log(j)
                }
                else if (j == 1 || j == 2 || j == 3 || j == 5) {
                    document.getElementById(j).style.display = 'none';
                    //console.log(j)
                }
            }
        })
    })
    