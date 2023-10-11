(function(){
        const sliders = [...document.querySelectorAll('testimony__body')];
        const buttonNext = document.querySelectorAll('#next');
        const buttonBefore = document.querySelectorAll('#before');
        let value;

        buttonNext.addEventListener('click', ()=>{
                changePosition(1);
        });

        buttonBefore.addEventListener('click', ()=>{
            changePosition(-1);
        });

        const changePosition = (add)=>{
        console.log(add);
        }

})();