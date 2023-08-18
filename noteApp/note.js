const addBtn1=document.querySelector("#addBtn");
const main=document.querySelector("#main");


addBtn1.addEventListener(
    "click",
    function(){
        addNote()
    }
 )


const saveNotes = ()=>{
    const notes = document.querySelectorAll(".note textarea")
   // console.log(notes)
    const data = [];
    notes.forEach(
        (note)=>{
            data.push(note.value)
        }
    )
    //console.log(data);
    if(data.length === 0){
        localStorage.removeItem("notes")
    }else{
    localStorage.setItem("notes",JSON.stringify(data))
    }
     
 }

 

 

const addNote = (text="")=>{
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML =`  
    <div class="toolbar"> 
    <i class="save fa-solid fa-floppy-disk"></i>
    <i class="trash fa-solid fa-trash"></i>
    </div> 
    <textarea>${text}</textarea>
    `;

    note.querySelector(".trash").addEventListener("click",function(){
        note.remove();
        saveNotes();
    }
    )

    note.querySelector(".save").addEventListener("click",function(){
        saveNotes();
       // console.log("working")
    }
    )
    main.appendChild(note);
    saveNotes()

}

//self calling functin
(
    function(){
        const lsNotes =JSON.parse(localStorage.getItem("notes"));
        //console.log(lsNotes);
        if(lsNotes===null){
            addNote()
          }else{
            lsNotes.forEach(
                (lsNote)=>{
                    addNote(lsNote)
                }
            )
        }  
        

       
    }
)()