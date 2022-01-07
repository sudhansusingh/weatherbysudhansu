const submitbtn = document.getElementById("submitbtn");
const city = document.getElementById("citynameinput");
const citydisplayhere = document.getElementById("citydisplayhere");

const temp = document.getElementById("temp");
const temp_type_image=document.getElementById("temp_type_image");
const getinfo = async (event) => {
    event.preventDefault();

    // alert("hi");

    var cityval = city.value;
    // alert(cityval);

    if (cityval === "") {
        alert("Please Enter Valid City");
        citydisplayhere.innerText = "YOUR CITY NAME HERE";
    }

    else {
        try {
            //alert("here");
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=d5ab202e7fa81eb3deb114ccc74aabbd`;
            //console.log(url);
            const response = await fetch(url).then(/*console.log("fetched")*/);
            const data = await response.json().then(/*console.log("CONVERTED TO OBJECT")*/);
            //console.log(data);
            const arrayData= [data];
            temp.innerText = arrayData[0].main.temp;
            //temp_type_image.innerText= arrayData[0].weather[0].main;

            citydisplayhere.innerText=`${arrayData[0].name}, ${arrayData[0].sys.country}`
            const tempMood=arrayData[0].weather[0].main;
            //console.log(tempMood);
            if(tempMood=="Clear")
            {
                temp_type_image.innerHTML= "<i class='fas fa-sun fa-10x'> </i>";
            }
            else if(tempMood=="Clouds")
            temp_type_image.innerHTML= "<i class='fas fa-cloud fa-10x'></i>";
            else if(tempMood=="Rain")
            temp_type_image.innerHTML= "<i class='fas fa-cloud-rain fa-10x'></i>";
            else
            temp_type_image.innerHTML= "<i class='fas fa-sun fa-10x'></i>";

            const min=document.getElementById("Min");
            min.innerText= arrayData[0].main.temp_min;
            //min.innerText="hello";
            const max=document.getElementById("Max");
            max.innerText= arrayData[0].main.temp_max;
            const feels_like=document.getElementById("feels_like");
            feels_like.innerText= arrayData[0].main.feels_like;
            const humidity=document.getElementById("humidity");
            humidity.innerText= arrayData[0].main.humidity;
            const visibility=document.getElementById("visibility");
            visibility.innerText= arrayData[0].visibility/1000;



        }

        catch 
        {
            //alert("Enter correct name");
            citydisplayhere.innerText = "Enter Correct city name";
            temp.innerText ='0';
        }

        // console.log("okaY");

    }

}
submitbtn.addEventListener("click", getinfo);


