// let content = {
//     caption: 'abba nahi manege',
//     type: 'image',
//     user: 'daljeet',
//     content: 'https//xyz.net/abc'

// const { commaDecimal } = require("validator/lib/alpha");

// }
let div = document.getElementById("carous")

function carousel() {
    //https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/927/1360927-h-375c5733d218
    //https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4831/1374831-h-13b22eedb0fa
    //https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1331/641331-h
    //https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4710/1364710-h-35825023b517

    let image = [`https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/927/1360927-h-375c5733d218`, `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4831/1374831-h-13b22eedb0fa`, `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/1331/641331-h`, `https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/4710/1364710-h-35825023b517`]

    let imgelement = document.createElement('img');
    imgelement.src = image[0]
    div.append(imgelement);
    let i = 1;
    setInterval(function() {
        if (i === image.length) {
            i = 0;
        }
        imgelement.src = image[i]
        i++;
        div.append(imgelement)
    }, 3000)


}
carousel();
//fetch  return promises
//http://www.omdbapi.com/?apikey=66ab3877&s 

async function searchmovies() {

    let loder = document.getElementById("loader")
    loder.style.display = "block"
    let movies_name = document.getElementById("movies_name").value;
    try {
        let response = await fetch(`https://www.omdbapi.com/?apikey=66ab3877&s=${movies_name}`)
        let data = await response.json()
        let actual_data = data.Search;
        console.log('actual_data', actual_data)
        appendMovies(actual_data)
    } catch (error) {
        console.log(error, error)
    }


    //then ,catch way promise data
    // response.then(function(success) {
    //     // console.log('Success', success)
    //     let data = success.json()
    //     data.then(function(success) {
    //         console.log('Success', success)
    //         appendMovies(success.Search);

    //     }).catch(function(error) {
    //         console.log('error', error);
    //     });
    // }).catch(function(error) {
    //     console.log('error', error);
    // });
}

function appendMovies(data) {
    let loder = document.getElementById("loader")
    loder.style.display = "none"
    let container = document.getElementById('container')
    container.innerHTML = null;
    data.forEach(function(ele) {
        let div = document.createElement('div')

        let img = document.createElement('img')
        img.src = ele.Poster
        let p_name = document.createElement('p')
        p_name.innerText = ele.Title;
        let p_type = document.createElement('p')
        p_type.innerText = ele.Type;

        p_year = document.createElement('p')

        p_year.innerText = ele.Year
        div.append(img, p_name, p_type, p_year)
        container.append(div)
    })
}
let id;

function debounce(fuc, delay) {
    //     func refering sesrchmovies function
    if (id) {
        clearTimeout(id)
    }
    id = setTimeout(function() {
        fuc()
    }, delay)

}