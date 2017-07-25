		// variables ==============================================
        const input = document.querySelector('#Input'),
        	   form = document.querySelector('form'), 
        	  grams = document.querySelector('#gramsOutput'), 
        	  	 kg = document.querySelector('#kgOutput'), 
        	  	 oz = document.querySelector('#ozOutput'),
        	  	lbs = document.querySelector('#lbsOutput'),
        	 output = document.querySelector('#output'), 
          	 select = document.querySelector('#select'); 



        // functions ==============================================  
        function pickUnit() {
		    if(this.value === "lbs"){
		        input.addEventListener('input', calcPounds);
		    } else if (this.value === "kgs"){
		        input.addEventListener('input', calcKilograms);
		    } else if (this.value === "grams"){
		        input.addEventListener('input', calcGrams);
		    } else if (this.value === "oz"){
		        input.addEventListener('input', calcOz);
		      }
			output.style.visiblity 	= 'visible'; 
        }

        function calcPounds() {
            grams.innerHTML = (Number(this.value) / 0.0022046).toFixed(2);
            kg.innerHTML    = (Number(this.value) / 2.2046).toFixed(2);
            oz.innerHTML    = Number(this.value) * 16;
            lbs.innerHTML   = this.value;  

        }
        
        function calcGrams() {
            grams.innerHTML = Number(this.value);
            kg.innerHTML    = (Number(this.value) / 1000).toFixed(2);
            oz.innerHTML    = Number(this.value) * 0.035274;
            lbs.innerHTML   = (Number(this.value) / 500).toFixed(2);
        }
        
        function calcOz() {
            grams.innerHTML = (Number(this.value) / 0.035274).toFixed(2);
            kg.innerHTML 	= (Number(this.value) / 35.274).toFixed(2);
            oz.innerHTML 	= Number(this.value);
            lbs.innerHTML 	= (Number(this.value) * 0.062500).toFixed(2);
        }
        
        function calcKgs() {
            grams.innerHTML = Number(this.value) * 1000;
            kg.innerHTML 	= Number(this.value);
            oz.innerHTML 	= (Number(this.value) * 35.274).toFixed(2);
            lbs.innerHTML 	= (Number(this.value) * 2.2046).toFixed(2);
        }
        

        // event listeners ==========================================
    	input.addEventListener('input', function(e){
      			output.style.visibility = 'visible'; }
      			); 
        input.addEventListener('input', calcPounds);
        select.addEventListener('input', pickUnit); 


        form.addEventListener('submit', (e) =>  { 
				e.preventDefault(); 
				console.log('form submission submission cancelled')
				}); 



