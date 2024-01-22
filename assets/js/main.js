let count = document.querySelectorAll('.list .item').length;
let active = 0;

function load() {
    let hide = active - 1 < 0 ? count - 1 : active - 1;
    let lastHide = hide - 1 < 0 ? count - 1 : hide - 1;

    document.getElementById('item_' + lastHide).classList.remove('hide');
    document.getElementById('item_' + hide).classList.remove('active');
    document.getElementById('item_' + hide).classList.add('hide');
    document.getElementById('item_' + active).classList.add('active');

    document.getElementById('effect').classList.add('start');

    setTimeout(() => {
        document.getElementById('effect').classList.remove('start');
    }, 3000);
};

load();

document.getElementById('next').onclick = function () {
    active = active + 1 >= count ? 0 : active + 1;

    load();
};

document.querySelector('.list').addEventListener('mouseover', function (e) {
    if (document.getElementById('effect').classList.contains('start')) {
        return;
    }

    if (e.target.classList.contains('button')) {
        document.getElementById('bird').style.right = '32%';
        document.getElementById('bird').style.bottom = '16%';
        document.getElementById('bird').style.transform = 'rotateY(192deg) rotate(-97deg)';
        return;
    }

    switch (true) {
        case ((e.pageX - e.target.getBoundingClientRect().left) < e.target.offsetWidth / 3):
            document.getElementById('bird').style.right = '60%';
            break;
        case ((e.pageX - e.target.getBoundingClientRect().left) > e.target.offsetWidth / 2):
            document.getElementById('bird').style.right = '30%';
            break;
        default:
            break;
    }

    switch (true) {
        case ((e.pageY - e.target.getBoundingClientRect().top) < e.target.offsetHeight / 2):
            document.getElementById('bird').style.bottom = '50%';
            break;
        case ((e.pageY - e.target.getBoundingClientRect().top) > e.target.offsetHeight / 2):
            document.getElementById('bird').style.bottom = '10%';
            break;
        default:
            break;
    }
});

document.querySelector('.list').addEventListener('mouseout', function (e) {
    document.getElementById('bird').style.right = '55%';
    document.getElementById('bird').style.bottom = '25%';
    document.getElementById('bird').style.transform = 'rotateY(192deg) rotate(-40deg)';
});



























