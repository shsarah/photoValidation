const submitBtn=document.getElementById("submit_btn");
const fileInput=document.getElementById("photo_file");
const cardWrapper=document.getElementById("card_wrapper");


function imagePreview(input){
    if(input.files){ 
		let file = input.files[0]; 

		let reader = new FileReader(); 
		reader.readAsDataURL(file); 

        let allowedImageTypes = ["image/jpeg", "image/jpg", "image/png"];
		if(!allowedImageTypes.includes(file.type)){ 
             alert("Only jpg, png, jpeg");
		}

		reader.onload = function(){ 
			if(reader.readyState == 2 && allowedImageTypes.includes(file.type)){ 
				let card = document.createElement("div");
                card.classList.add("image_card");
                card.innerHTML+=` <img style="width: 50px; height: 50px;" src="${reader.result}">
                <p>${file.name}</p>
                <button type="button" id="delete_btn"><i class="fa-solid fa-x fa-xl" style="color: #e92f2f;"></i></button>
                 `;
                cardWrapper.appendChild(card);

                const deleteButton=document.getElementById("delete_btn");

                deleteButton.addEventListener("click", handleDelete);

                function handleDelete(){
                    cardWrapper.remove(cardWrapper[0]);
                }

			}

		}

	}
}

function alertFunct(e){
    alert("Files are uploaded.")
}
