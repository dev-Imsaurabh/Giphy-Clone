function nav(){
    return `<div id="nav">
    <div>
        <img id="logo" src="/assets/Screenshot 2022-10-22 091004.png" alt="">
    </div>
    <div>
        <p href="" id="home">Home</p>
        <p href="" id="random">Random</p>
        <p href="" id="gif">Gif</p>
        <p href="" id="translate">Translate</p>
        <p href ="" id="categ">Categories</p>
    </div>
    <div>

        <div id="account">
            <img src="https://media.giphy.com/avatars/default4/80h.gif" alt="">
            <select name="" id="accDropDown">
                <option value="">Username</option>
                <option value="Collections">Collections</option>
                <option value="Favorite">Favorite</option>
                <option value="Settings">Settings</option>
                <option value="Logout">Logout</option>
            </select>
        </div>

    </div>
</div>

<div id="searchDiv">
    <input id="search" type="text" autocomplete="off" placeholder="Search Gif here...">
    <button id="seacrhBtn"><img id="searchIcon" src="https://giphy.com/static/img/search-icon.svg"
            alt=""></button>
</div>
<h3 id="heading" style="color: white;">Trending</h3>
<div id="search-box"></div>`
}

export default nav