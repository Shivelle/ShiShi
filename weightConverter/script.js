        const input = document.querySelector('#Input'); 
        const grams = document.querySelector('#gramsOutput'); 
        const kg    = document.querySelector('#kgOutput'); 
        const oz    = document.querySelector('#ozOutput');
        const lbs   = document.querySelector('#lbsOutput');


        function calcPounds(){
            grams.innerHTML = (Number(this.value) / 0.0022046).toFixed(2);
            kg.innerHTML    = (Number(this.value) / 2.2046).toFixed(2);
            oz.innerHTML    = Number(this.value) * 16;
            lbs.innerHTML   = this.value;  
        }
        
        function calcGrams(){
            grams.innerHTML = Number(this.value);
            kg.innerHTML    = (Number(this.value) / 1000).toFixed(2);
            oz.innerHTML    = Number(this.value) * 0.035274;
            lbs.innerHTML   = (Number(this.value) / 500).toFixed(2);
        }
        
        function calcOz(){
            grams.innerHTML = (Number(this.value) / 0.035274).toFixed(2);
            kg.innerHTML = (Number(this.value) / 35.274).toFixed(2);
            oz.innerHTML = Number(this.value);
            lbs.innerHTML = (Number(this.value) * 0.062500).toFixed(2);
        }
        
        function calcKilograms(){
            grams.innerHTML = Number(this.value) * 1000;
            kg.innerHTML = Number(this.value);
            oz.innerHTML = (Number(this.value) * 35.274).toFixed(2);
            lbs.innerHTML = (Number(this.value)*2.2046).toFixed(2);
        }
        
        input.addEventListener('input', calcPounds);
        document.getElementById('select').addEventListener('input',function(){
    
           if(this.value === "lbs"){
               input.addEventListener('input', calcPounds);
           } else if (this.value === "kgs"){
               input.addEventListener('input', calcKilograms);
           } else if (this.value === "grams"){
               input.addEventListener('input', calcGrams);
           } else if (this.value === "oz"){
               input.addEventListener('input', calcOz);
           }
        });