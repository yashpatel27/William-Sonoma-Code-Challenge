var output = [];
(function() {/* istanbul ignore next */
    var array = [];
    var value = "";
    // API calling through Jquery AJAX Call
    $(document).ready(function() {/* istanbul ignore next */
        $.ajax({
            url: "https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json",
            type: "GET",
            success: function(result) {/* istanbul ignore next */
                array = result.groups;
                // Making improper response to proper format
                for (let z = 0; z < array.length; z++) {/* istanbul ignore next */
                    if (array[z].price) {
                        output.push({
                            name: array[z].name,
                            img: array[z].hero.href,
                            price: array[z].price.selling,
                            thumbnail: array[z].thumbnail.href,
                            _id: array[z].id
                        });
                    } else {
                        output.push({
                            name: array[z].name,
                            img: array[z].hero.href,
                            price: array[z].priceRange.selling.high,
                            thumbnail: array[z].thumbnail.href,
                            _id: array[z].id
                        });
                    }
                }
                console.log(output);
                //Dynamic Bindings using back ticks
                for (let i = 0; i < output.length; i++) {/* istanbul ignore next */
                    value += `<div class="card col-sm-12 col-md-3  custom-card p-0" >
                        <div  class="title">${output[i].name}</div>
                        <img id="${output[i]._id}" src="${output[i].img}" onclick="modalshow(id)" >
                        <div class="price">$ ${output[i].price}</div>
                        </div>`;
                }
                document.getElementById("data").innerHTML = value;
            },
            error: function(error) {/* istanbul ignore next */
                console.log(error);
            },
        });
    });
})();

// Dynamic thumbnail bindings...
function modalshow(id) {
    var corosal = "";
    document.getElementById("condition").style.display = "block";
    for (let k = 0; k < output.length; k++) {/* istanbul ignore next */
        if (output[k]._id == id) {
            corosal += `<div class="carousel-item active">
                    <img class="d-block w-100" src="${output[k].thumbnail}" alt="slide">
                </div>`;
        }
    }
    document.getElementById("cor").innerHTML = corosal;
}

// for closing the modal
function modalhide() {
    document.getElementById("condition").style.display = "none";
}