let inbox_page_functionality=((user)=>{

    //----------------------------switching between inbox page tabs--------------------------------

    let choose = document.querySelectorAll('#infopanel-bar>h5')
    choose.forEach((el, i) => {
        el.addEventListener('click', () => {
            //console.log(i)
            for (let j = 0; j < 5; j++) {
                if (j != i) {
                    document.querySelector(`#infopanel-content>div:nth-child(${j + 1})`).style.display = 'none';
                    console.log(j)

                    let yolo = document.querySelector(`#infopanel-bar>h5:nth-child(${j + 1})`)
                    yolo.style.color = 'black'
                    yolo.style.textDecoration = 'none'
                }
                else {
                    document.querySelector(`#infopanel-content>div:nth-child(${j + 1})`).style.display = 'block';
                    console.log('fdd')

                    el.style.color = 'blue'
                    el.style.textDecoration = 'underline'
                }
            }
        })
    })

    //---------------------------switching between 2 raw codes------------------------------ 

    let techSelect = document.querySelector('#mailpanel-select')
    techSelect.onchange = (el) => {
        console.log(el.target.value)
        if (el.target.value == 'a') {
            document.getElementById('code-first').style.display = 'block'
            document.getElementById('code-second').style.display = 'none'
        }
        else {
            document.getElementById('code-first').style.display = 'none'
            document.getElementById('code-second').style.display = 'block'
        }
    }

    //-------------------------fetching data from server----------------------------------

    let howitworks = document.getElementById('howitworks')
    let fetchdata = async () => {
        try {
                let api = 'http://localhost:3000/users'
                let ftch = await fetch(api)
                //console.log('ftch: ', ftch);
                let mdata = await ftch.json();
                //console.log('mdata: ', mdata);
            //let maildata=user.data;    
                let maildata = mdata[0].data;
            console.log('maildata: ', maildata);
            pend(maildata)
            howitworks.style.display = 'none'
        }
        catch (err) {
            console.log('err: ', err);
            howitworks.style.display = 'block'
        }
    }

 //----------------------appending data as mail-----------------------------   
    fetchdata()
    let pend = (maildata) => {
        maildata.forEach((el) => {
            //console.log(el)
            let originalPass = document.getElementById('mailpass').innerText
            //console.log(originalPass)
            //console.log(el.auth.pass)
            if (originalPass == el.auth.pass) {
                let dv = document.createElement('div')
                let message = document.createElement('h4')
                let to = document.createElement('p')
                let from = document.createElement('p')

                message.innerText = el.message;
                to.innerText = `To: ${el.to}`;
                from.innerText = el.from;
                from.style.display = 'none'
                dv.append(message, to, from)
                dv.setAttribute('class', 'eachMail')
                dv.onclick = (() => {
                    bond(el)
                })

                document.getElementById('appendMail').append(dv)
            }

        })
    }

//----------------------accessing the complete mail--------------------------    
    let bond = (el) => {
        console.log(el)
        let dd = document.getElementById('disappeardata')
        dd.innerHTML = null;
        let mdiv=document.createElement('div')
        let ldiv = document.createElement('div')
        let message = document.createElement('h2')
        let from = document.createElement('p')
        let to = document.createElement('p')

        mdiv.setAttribute('id','motherdiv')
        ldiv.setAttribute('id','leftdiv')
        message.innerText = el.message;
        message.style.color='blue'
        from.innerText = `From: ${el.from}`;
        to.innerText = `To: ${el.to}`;
        ldiv.append(message, from, to)
        

        let rdiv = document.createElement('div')
        let mdate = document.createElement('p')
        let mtime = document.createElement('p')
        let afew = document.createElement('p')
        let msize = document.createElement('p')

        let brek=document.createElement('br')
        let trek=document.createElement('br')
        let prek=document.createElement('br')
        let hline=document.createElement('hr')

        //-----------Date and time---------
        let currentDate = new Date().toJSON().slice(0, 10);
        //console.log(currentDate);
        let currentTime= new Date().toLocaleTimeString();
        //console.log(currentTime)
        let size=Math.floor((Math.random()*400)+100)
        //console.log(size)

        rdiv.setAttribute('id','rightdiv')
        mdate=currentDate;
        mtime=currentTime;
        afew='(a few seconds ago)'
        msize=size+' Bytes'

        rdiv.append(mdate,brek,mtime,trek,afew,prek,msize)
        mdiv.append(ldiv,rdiv)
        dd.append(hline,mdiv)
        
    }


//---------------appending username and password-----------------------------------

    // let mailPass=document.querySelectorAll(".mailpass")
    // let fetchpass=async()=>{
    //     try{
    //         let api='http://localhost:3000/users'
    //         let ftch=await fetch(api)
    //         let maildata=await ftch.json();
    //         appendpass(maildata)
    //     }
    //     catch(err){
    //         console.log('err: ', err);
    //     }
    // }

    // let appendpass=(maildata)=>{
    //     mailPass.forEach((el)=>{
    //         el.innerText=maildata......
    //     })
    // }

})

export { inbox_page_functionality }

