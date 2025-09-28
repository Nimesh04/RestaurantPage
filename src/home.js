
export const homeDiv = function (){
    const newDiv = document.createElement("div");
    newDiv.id = "hero";
    newDiv.innerHTML = 

        `<div>
            <h1 class="headline">Experience Authentic Japanese Dining</h1>
            <h2 class="subheadline">Fresh, Artful, and Unforgettable.</h2>

            <button class="cta">View Menu</button>
        </div>`
    return newDiv;
}