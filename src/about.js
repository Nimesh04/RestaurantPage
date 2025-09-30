export const createAbout = function (){
    const aboutDiv = document.createElement("div");
    aboutDiv.classList.add("aboutSection");
    aboutDiv.innerHTML = 
    `<div class="storySection">
        <div>
            <h3>Our Story</h3>
            <p>Sakura Zen blends traditional japanese culinary arts with a vet-modern touche. Our authentic-dining experience.</p>
        </div>
        <div>
            <p>Locally Sourced</p>
            <p>Family Receipes</p>
            <p>Award-Winning Chefs</p>
        </div>
    </div>

    <div class="meetChef">
        <img src="https://images.unsplash.com/photo-1717838206417-c4fe2b9fb043?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Chef's photo">
        <div>
            <h3>Meet the Chef</h3>
            <p>Head Chef, as a master of Japanese cuisine. Hu's passion and expertise are reflected in every dish.</p>
        </div>
    </div>`;
    return aboutDiv;
}


