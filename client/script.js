function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('.showImg').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$(document).ready(function(){

    $("#imgInput").change(function(){
        readURL(this);
    });

    $('.newEmp').click(function(){
        $('form input').val('');
        $('form img').attr('src', './image/emp_profile.png');
    });

    $('.submit').click(function(){
        var isValid = true;
        $('.inputField input').each(function(){
            if ($(this).val() == '') {
                isValid = false;
            }
        });
        if (!isValid) {
            alert('All fields are required !');
            return false;
        }
        var showPicture = $('.showImg').attr('src');
        var showEmpNo = $('input#showEmpNo').val();
        var showName = $('input#showName').val();
        var showAge = $('input#showAge').val();
        var showCity = $('input#showCity').val();
        var showEmail = $('input#showEmail').val();
        var showPhone = $('input#showPhone').val();
        var showPost = $('input#showPost').val();
        var showsDate = $('input#showsDate').val();
        if (showEmpNo != '') {
            var tblRow = $('#data tr[data-empno="'+showEmpNo+'"]');
            empNo = showEmpNo;
        }else {
            var tblRow = $('.proto').clone();
            var empNo = $('tbody tr:not(.proto)').length;
            empNo++;
        }

     // Send data to the server
     fetch('/empForm', {
        method: 'POST', // Change to 'GET', 'PUT', 'DELETE', etc., as needed
        headers: {
            'Content-Type': 'application/json', // Adjust content type if sending JSON data
        },
        body: JSON.stringify({

            "fname" : showName,
            "employee_age" : showAge,
            "city": showCity,
            "email": showEmail,
           "phone": showPhone,
            "post": showPost,
            "sdate": showsDate
        }), // Convert data to JSON format if needed
    })
    .then(response => response.json())
    .then(responseData => {
        console.log('Data sent to the server successfully:', responseData);
    })
    .catch(error => {
        console.error('Error sending data to the server:', error);
    });

    // Send data to the server
    fetch('/empForm', {
        method: 'GET', // Change to 'GET', 'PUT', 'DELETE', etc., as needed
        headers: {
            'Content-Type': 'application/json', // Adjust content type if sending JSON data
        },
        body: JSON.stringify({

            "fname" : showName,
            "employee_age" : showAge,
            "city": showCity,
            "email": showEmail,
           "phone": showPhone,
            "post": showPost,
            "sdate": showsDate
        }), // Convert data to JSON format if needed
    })
    .then(response => response.json())
    .then(responseData => {
        console.log('Data sent to the server successfully:', responseData);
    })
    .catch(error => {
        console.error('Error sending data to the server:', error);
    });

    // Send data to the server
    fetch('/empForm', {
        method: 'PUT', // Change to 'GET', 'PUT', 'DELETE', etc., as needed
        headers: {
            'Content-Type': 'application/json', // Adjust content type if sending JSON data
        },
        body: JSON.stringify({

            "fname" : showName,
            "employee_age" : showAge,
            "city": showCity,
            "email": showEmail,
           "phone": showPhone,
            "post": showPost,
            "sdate": showsDate
        }), // Convert data to JSON format if needed
    })
    .then(response => response.json())
    .then(responseData => {
        console.log('Data sent to the server successfully:', responseData);
    })
    .catch(error => {
        console.error('Error sending data to the server:', error);
    });

    // Send data to the server
    fetch('/empForm', {
        method: 'DELETE', // Change to 'GET', 'PUT', 'DELETE', etc., as needed
        headers: {
            'Content-Type': 'application/json', // Adjust content type if sending JSON data
        },
        body: JSON.stringify({

            "fname" : showName,
            "employee_age" : showAge,
            "city": showCity,
            "email": showEmail,
           "phone": showPhone,
            "post": showPost,
            "sdate": showsDate
        }), // Convert data to JSON format if needed
    })
    .then(response => response.json())
    .then(responseData => {
        console.log('Data sent to the server successfully:', responseData);
    })
    .catch(error => {
        console.error('Error sending data to the server:', error);
    });


        tblRow.removeClass('proto');
        tblRow.find('.empNo').text(empNo);
        tblRow.attr('data-empno', empNo);
        tblRow.find('.picture img').attr('src', showPicture);
        tblRow.find('.fname').text(showName);
        tblRow.find('.employee_age').text(showAge);
        tblRow.find('.city').text(showCity);
        tblRow.find('.email').text(showEmail);
        tblRow.find('.phone').text(showPhone);
        tblRow.find('.post').text(showPost);
        tblRow.find('.sdate').text(showsDate);
        if (showEmpNo == '') {
            $('#data').append(tblRow);
        }
        $('.modal').modal('hide');
    });

    $('#data').on('click', '.btn-danger', function(){
        $(this).parents('tr').remove();
    });

    $('body').on('click', '.newEmp', function(){
        $('.modal .modal-footer').show();
    });

    $('#data').on('click', '.btn-primary, .btn-warning', function(){
        $('.modal .modal-footer').show();
        var tblRow = $(this).parents('tr');
        var showEmpNo = tblRow.find('.empNo').text();
        var showPicture = tblRow.find('img').attr('src');
        var showName = tblRow.find('.fname').text();
        var showAge = tblRow.find('.employee_age').text();
        var showCity = tblRow.find('.city').text();
        var showEmail = tblRow.find('.email').text();
        var showPhone = tblRow.find('.phone').text();
        var showPost = tblRow.find('.post').text();
        var showsDate = tblRow.find('.sdate').text();
        $('.showImg').attr('src', showPicture).text();
        $('input#showEmpNo').val(showEmpNo);
        $('input#showName').val(showName);
        $('input#showAge').val(showAge);
        $('input#showCity').val(showCity);
        $('input#showEmail').val(showEmail);
        $('input#showPhone').val(showPhone);
        $('input#showPost').val(showPost);
        $('input#showsDate').val(showsDate);
        if ($(this).hasClass('btn-warning')) {
            $('.modal .modal-footer').hide();
        }
        $('.modal').modal('show');
    });

});

// API endpoint URL
const url = '/empForm';

// Function to fetch data from API and populate the table
async function fetchAndPopulateData() {
    try {
        const response = await fetch(url);
        const data = await response.json();

        const tbody = document.getElementById('data');

        // Loop through each item in the data array
        data.forEach(item => {
            // Clone the prototype row
            const row = document.querySelector('.proto').cloneNode(true);

            // Assign the values of each data property to the corresponding table cell
            row.dataset.empno = item.empNo;
            row.querySelector('.empNo').textContent = item.empNo;
            row.querySelector('.picture img').src = item.picture;
            row.querySelector('.fname').textContent = item.fname;
            row.querySelector('.employee_age').textContent = item.age;
            row.querySelector('.city').textContent = item.city;
            row.querySelector('.email').textContent = item.email;
            row.querySelector('.phone').textContent = item.phone;
            row.querySelector('.post').textContent = item.jobPost;
            row.querySelector('.sdate').textContent = item.sDate;

            // Append the row to the table body
            tbody.appendChild(row);
        });

        // Remove the prototype row
        tbody.querySelector('.proto').remove();
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', fetchAndPopulateData);








 
