(function () {
    const imgCustomer = document.getElementById('img-customer');
    const nameCustomer = document.getElementById('name-customer');
    const textCustomer = document.getElementById('text-customer');
    const buttons = document.querySelectorAll('.btn');
    console.log(buttons)
    let index = 0;
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('prev')) {
                index = index === 0 ? customers.length - 1 : index - 1
                console.log(index, 'prev')
                imgCustomer.src = `./images/${customers[index].img}.jpg`
                nameCustomer.textContent = customers[index].name
                textCustomer.textContent = customers[index].text
            }
            if (btn.classList.contains('next')) {
                index = index === customers.length - 1 ? 0 : index + 1
                console.log(index, 'next')
                imgCustomer.src = `./images/${customers[index].img}.jpg`
                nameCustomer.textContent = customers[index].name
                textCustomer.textContent = customers[index].text
            }
        })
    })
})()
const customers = [
    {
        img: '1',
        name: 'John',
        text: '  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis dicta est illum ipsa minus neque\n' +
            '            non, nostrum numquam obcaecati, placeat ratione repellendus reprehenderit soluta!'
    },
    {
        img: '2',
        name: 'Alex',
        text: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consequuntur, eaque et labore magnam nihil nisi\n' +
            '    placeat. Aperiam nostrum, qui.'
    },
    {
        img: '3',
        name: 'Kite',
        text: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid deserunt dicta eligendi incidunt, ipsam itaque\n' +
            '    minima molestiae quo recusandae. Eligendi error excepturi id, in mollitia possimus quia quibusdam ut?'
    },
    {
        img: '4',
        name: 'Elisa',
        text: '    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias corporis cupiditate dignissimos dolor enim esse eum\n' +
            '    ipsam necessitatibus, porro quasi repudiandae sed sint, tempora voluptatibus.'
    }
];