export const createMenu = function(){
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menuCTA");
    menuDiv.innerHTML = 
    `<h2>Menu Categories</h2>
    <div class="foodSection">
        <div class="foodCTA">
            <img src="https://images.unsplash.com/photo-1631655376078-b6319604bd17?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sushi Platter">
            <div>
                <h3 class="foodHeading">Sushi Platter</h3>
                <p>Sirch Platter</p>
                <p>Served with Ciniassic.</p>
                <p>$12</p>
            </div>
        </div>
        <div class="foodCTA">
            <img src="https://images.unsplash.com/photo-1631655376078-b6319604bd17?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sushi Platter">
            <div>
                <h3 class="foodHeading">Sushi Platter</h3>
                <p>Sirch Platter</p>
                <p>Served with Ciniassic.</p>
                <p>$12</p>
            </div>
        </div>
        <div class="foodCTA">
            <img src="https://images.unsplash.com/photo-1631655376078-b6319604bd17?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sushi Platter">
            <div>
                <h3 class="foodHeading">Sushi Platter</h3>
                <p>Sirch Platter</p>
                <p>Served with Ciniassic.</p>
                <p>$12</p>
            </div>
        </div>
        <div class="foodCTA">
            <img src="https://images.unsplash.com/photo-1631655376078-b6319604bd17?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Sushi Platter">
            <div>
                <h3 class="foodHeading">Sushi Platter</h3>
                <p>Sirch Platter</p>
                <p>Served with Ciniassic.</p>
                <p>$12</p>
            </div>
        </div>
    </div>`;
    return menuDiv;
}