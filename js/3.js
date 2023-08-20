let date_holder = document.getElementById("dd_mm_yy");
let date = new Date();
let dd = date.getDate();
month = date.getMonth()+1;//+1 corrects month value bcs 0=january 11=december
day = date.getDate();

function single_digit_month_handler(month)
{
    if (month < 10)
    {
        return "0" + month.toString();
    } else
    {
        return month.toString();
    }
}

function single_digit_day_handler(day) {
    if (day < 10)
    {
        return "0" + day.toString();
    } else
    {
        return day.toString();
    }
}

date_holder.innerHTML = single_digit_day_handler(day) + '.' + single_digit_month_handler(month) + '.' + date.getFullYear();
