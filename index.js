let interviewitem = [];
let rejecteditem = [];
let currentstutes = "all";

let totle = document.getElementById("totle");

let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");
let totlecount = document.getElementById("totle-count")

let deletebtn = document.querySelectorAll("#dlt-btn");
// console.log(deletebtn.parentNode.parentNode)


let allfilterbtn = document.getElementById("all-filter-btn")
let interviewfilterbtn = document.getElementById("interview-filter-btn")
let rejectedfilterbtn = document.getElementById("rejected-filter-btn")

let allcard = document.getElementById("allcards");
console.log(allcard)


totle.innerText = allcard.children.length;
totlecount.innerText = allcard.children.length

// delete button code here
deletebtn.forEach(function (btnn) {
    btnn.addEventListener("click", function () {
        let a = btnn.parentNode.parentNode;
        console.log(a);
        a.remove();
        totle.innerText = allcard.children.length;
        totlecount.innerText = allcard.children.length
    })


})


// interviewitem.push(2)
let maincontainer = document.querySelector('main');

let interviewsection = document.getElementById("interview-section")

// counter code here
function counter() {
    totle.innerText = allcard.children.length;
    
    interview.innerText = interviewitem.length;
    rejected.innerText = rejecteditem.length;
    // totlecount.innerText=allcard.children.length

}

// toggle function here
function togglebtn(id) {
    allfilterbtn.classList.remove('bg-[#3B82F6]', 'text-white')
    interviewfilterbtn.classList.remove('bg-[#3B82F6]', 'text-white')
    rejectedfilterbtn.classList.remove('bg-[#3B82F6]', 'text-white')

    allfilterbtn.classList.add('bg-gray-300', 'text-black')
    interviewfilterbtn.classList.add('bg-gray-300', 'text-black')
    rejectedfilterbtn.classList.add('bg-gray-300', 'text-black')

    const selectedbtn = document.getElementById(id);
    console.log(selectedbtn)

    currentstutes = id;

    selectedbtn.classList.remove('bg-gray-300', 'text-black')
    selectedbtn.classList.add('bg-[#3B82F6]', 'text-white')

    if (id == 'interview-filter-btn') {
        allcard.classList.add("hidden");
        interviewsection.classList.remove("hidden");
         let inte = interview.innerText = interviewitem.length;
         totlecount.innerText = inte;
        randerinterview();

    } else if (id == "all-filter-btn") {
        allcard.classList.remove("hidden");
        interviewsection.classList.add("hidden")
         let allbtncounter = totle.innerText = allcard.children.length;
         totlecount.innerText = allbtncounter;
    } else if (id = "rejected-filter-btn") {
        allcard.classList.add("hidden");
        interviewsection.classList.remove("hidden")
        let rejectcounter = rejected.innerText = rejecteditem.length;
        totlecount.innerText = rejectcounter;
        randerreject()
    }





}

// interview button code here
maincontainer.addEventListener('click', function (event) {
    
    if (event.target.classList.contains('intervew-btn')) {
        const parentNode = event.target.parentNode.parentNode;
        let c = interview.innerText = interviewitem.length;
        console.log(c)
        
        const companyname = parentNode.querySelector('.companyname').innerText;
        const fildname = parentNode.querySelector('.fild-name').innerText;
        const time = parentNode.querySelector('.time').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const note = parentNode.querySelector('.note').innerText;

        parentNode.querySelector('.status').innerText = 'interview';
        const cardobj = {
            companyname,
            fildname,
            time,
            status: 'interview',
            note
        }
        const companynameexest = interviewitem.find(item => item.companyname == cardobj.companyname)

        if (!companynameexest) {
            interviewitem.push(cardobj)
        }

        rejecteditem = rejecteditem.filter(item => item.companyname != cardobj.companyname)

         counter()
        if (currentstutes == "rejected-filter-btn") {
            randerreject();
        }

        ;
    }

    else if (event.target.classList.contains('rejected-btn')) {
        const parentNode = event.target.parentNode.parentNode;

        const companyname = parentNode.querySelector('.companyname').innerText;
        const fildname = parentNode.querySelector('.fild-name').innerText;
        const time = parentNode.querySelector('.time').innerText;
        const status = parentNode.querySelector('.status').innerText;
        const note = parentNode.querySelector('.note').innerText;

        parentNode.querySelector('.status').innerText = 'rejected';
        const cardobj = {
            companyname,
            fildname,
            time,
            status: 'rejected',
            note
        }
        const companynameexest = rejecteditem.find(item => item.companyname == cardobj.companyname)

        if (!companynameexest) {
            rejecteditem.push(cardobj)
        }
        interviewitem = interviewitem.filter(item => item.companyname != cardobj.companyname)

        if (currentstutes == 'interview-filter-btn') {
            randerinterview()
        }
        counter()


    }

})

// render function here
function randerinterview() {
    interviewsection.innerHTML = ''

    if (interviewitem.length == 0) {
        interviewsection.innerHTML = `
            <div class="space-y-6 p-10 bg-white mt-8">
                    <div class="text-center flex flex-col justify-center items-center mt-10 text-gray-500">
                        <img src="jobs.png">
                        <p class="text-xl font-semibold">No jobs available</p>
                        <p class="mt-4">Check back soon for new job opportunities</p>
                    </div>
                    
        
            `;
        return;
    }

    for (let interviwe of interviewitem) {
        console.log(interviwe);

        let div = document.createElement('div');
        div.className = "card flex justify-between bg-white  mt-10"
        console.log(div);
        div.innerHTML = `
        <div class="space-y-6 p-10">
                    <div>
                        <p class="companyname text-2xl text-[#002C5C] font-semibold">${interviwe.companyname}</p>
                        <p class="fild-name text-gray-500">React Native Developer</p>
                        <p class="time text-gray-500 mt-3">Remote• Full-time •$130,000 - $175,000</p>
                    </div>
                    <p class="status h-[45px] w-[120px] p-2 text-center font-bold bg-gray-200 ">${interviwe.status}</p>
                    <p class="note text-[#323B49]">Build cross-platform mobile applications using React Native. Work on products used
                        by millions of users worldwide.</p>

                    <div class="flex gap-5">
                        <button class="intervew-btn border-2 border-green-400 px-10 py-2  text-green-500">interview</button>
                        <button class="rejected-btn border-2 border-red-400 px-10 py-2 text-red-500">Rejected</button>
                    </div>
                    
                </div>
                <div>
                    <button class="delete-btn"><i class="fa-solid fa-calendar-minus"></i></button>
                </div>
        `
        interviewsection.appendChild(div);

    }
}

function randerreject() {
    interviewsection.innerHTML = '';

    if (rejecteditem.length == 0) {
        interviewsection.innerHTML = `
        <div class="space-y-6 p-10 bg-white mt-8">
                    <div class="text-center flex flex-col justify-center items-center mt-10 text-gray-500">
                        <img src="jobs.png">
                        <p class="text-xl font-semibold">No jobs available</p>
                        <p class="mt-4">Check back soon for new job opportunities</p>
                    </div>
                    
        `;
        return;
    }

    for (let reject of rejecteditem) {
        console.log(reject);

        let div = document.createElement('div');
        div.className = "card flex justify-between bg-white  mt-10"
        div.innerHTML = `
        <div class="space-y-6 p-10">
                    <div>
                        <p class="companyname text-2xl text-[#002C5C] font-semibold">${reject.companyname}</p>
                        <p class="fild-name text-gray-500">React Native Developer</p>
                        <p class="time text-gray-500 mt-3">Remote• Full-time •$130,000 - $175,000</p>
                    </div>
                    <p class="status h-[45px] w-[120px] p-2 text-center font-bold bg-gray-200 ">Not Applied</p>
                    <p class="note text-[#323B49]">Build cross-platform mobile applications using React Native. Work on products used
                        by millions of users worldwide.</p>

                    <div class="flex gap-5">
                        <button class="intervew-btn border-2 border-green-400 px-10 py-2  text-green-500">interview</button>
                        <button class="rejected-btn border-2 border-red-400 px-10 py-2 text-red-500">Rejected</button>
                    </div>
                    
                </div>
                <div>
                    <button class="delete-btn"><i class="fa-solid fa-calendar-minus"></i></button>
                </div>
        `
        interviewsection.appendChild(div);
    }
}