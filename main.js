$(document).ready(function () {
    $.ajax({
        url: 'https://api-berita-indonesia.vercel.app/antara/politik/',
        method: 'GET',
        success: function (data) {
            console.log("Data received from API:", data);
            displayBerita(data);
        },
        error: function (error) {
            console.error("Error fetching data: ", error);
        }
    });

    function displayBerita(data) {
        if (data && data.data && data.data.posts) {
            let output = '';
    
            $.each(data.data.posts, function (index, item) {
                output += `
                <div class="col-md-4 mb-3 d-flex">
                    <div class="card flex-fill">
                        <img src="${item.thumbnail}" class="card-img-top" alt="...">
                        <div class="card-body shadow d-flex flex-column">
                            <h5 class="card-title">${item.title}</h5>
                            <p class="card-text flex-grow-1 text-justify">${item.description}</p>
                            <a href="${item.link}" class="btn btn-danger mt-auto">Lihat Selengkapnya</a>
                        </div>
                    </div>
                </div>
                `;
            });
    
            $('#beritaList').html(output);
        } else {
            console.error("Invalid data format: ", data);
        }
    }
});
