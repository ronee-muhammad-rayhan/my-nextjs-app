import Image from "next/image";
import React from "react";
import nextImage from "@/assets/nextjs-logo.png";

const AlbumPage = () => {
  return (
    <div>
      <h1> Using Image component</h1>
      <Image
        // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAdVBMVEX///8AAAAiIiIWFhZ0dHQcHBzz8/MlJSW5ubk7OzsfHx/Hx8cODg4vLy+YmJikpKRISEgSEhJ/f39vb2/AwMDr6+tXV1e3t7eOjo74+PjJycloaGg/Pz/h4eGHh4c0NDTY2Nitra2bm5t6enphYWFOTk7S0tLuyumXAAAC3klEQVR4nO3Y6XaqMBSG4WwQB8QBGR1ARev9X+JJ0FYG9VSX9dh13ucPlCaWfIZkU6UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+h6F/fwBso4m7rWhJ0Zua47Nywm9c79YNOJ9Dd0uBC42X+ksE8aCIyaV4bi7c2R7Fv8JxNtc9ON5ZAdVcXOvmSvmg0jynEksGmcc1zBuYoluXLFb7lVsKLBp7lSKKG1SauZdnliXN45YjuNw/EdaQ+sc8Z+Gm/JSyleoiyP3UIxbG8Uaa6/eHZYeXau4U+Ceetv/puQrH1151UrpwzkOHVbgs9bt/NzOlMTxhZtlpMHa948r3+jGKi5rG4rnycd4hKBuH1nt2plM+DXgL0cdtuoDMYP/1+f8JE4rkKbfM4f91wJYPFrb65eR6Wvp4PVnbh178nA893lBmOfqKt04jPGbijup5XmxhmHXBcy9u3Ptb4RRm4PXPMypm9LIuFyr7gOlWyapRUkX4OLCe+/NG/LgOltnq/s8v9rjIPelV2c5vvHtdDr70eGlcy2Mx0t36+j5d58h5V6jmDcpssi4Xvrwfb4/Nw13oQSqR63mwyGXe8KzPoxSoZKHUYiV4b89T/7r4gehD37gtD6S7kraqmWgambNTFgm99sz6w7XIs+dX64HIGkVqJM42D9EbCr9TIQEWxqXG/MujPu3XR6RWrrBPjUwX4WSfW3chAbbbjWbCS9bOH85BmBupYLHzuC633hH057PmHmf/nKjBamwKj8TzUMgi/vnOzHpyCHMrmmWN5VDsDM7ftzwzqnNP6cPBsy/Y21T47E1hQ+5hqBplIlo3SbZJMRqJ/2hdJmBT69B0U+rttXcxWZS6tSTA9fn+5OY+b/z8wF2u5rKXyzjwYqCyN9Wuos9Rt+p2Rbr3O2/+7eCPJ35sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuNsfZlklS4Gpk88AAAAASUVORK5CYII="
        // src="https://www.programming-hero.com/header/ph_logo.svg"
        src="https://img.freepik.com/free-vector/mobile-tech-landing-page_23-2148716511.jpg?w=2000&t=st=1697810503~exp=1697811103~hmac=dc6f06075ad0eb915805c187e753740096ede2da94f6b4b3f930adc676e9b962"
        width={500}
        height={500}
        alt="next logo"
      />
      <Image
        // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAdVBMVEX///8AAAAiIiIWFhZ0dHQcHBzz8/MlJSW5ubk7OzsfHx/Hx8cODg4vLy+YmJikpKRISEgSEhJ/f39vb2/AwMDr6+tXV1e3t7eOjo74+PjJycloaGg/Pz/h4eGHh4c0NDTY2Nitra2bm5t6enphYWFOTk7S0tLuyumXAAAC3klEQVR4nO3Y6XaqMBSG4WwQB8QBGR1ARev9X+JJ0FYG9VSX9dh13ucPlCaWfIZkU6UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+h6F/fwBso4m7rWhJ0Zua47Nywm9c79YNOJ9Dd0uBC42X+ksE8aCIyaV4bi7c2R7Fv8JxNtc9ON5ZAdVcXOvmSvmg0jynEksGmcc1zBuYoluXLFb7lVsKLBp7lSKKG1SauZdnliXN45YjuNw/EdaQ+sc8Z+Gm/JSyleoiyP3UIxbG8Uaa6/eHZYeXau4U+Ceetv/puQrH1151UrpwzkOHVbgs9bt/NzOlMTxhZtlpMHa948r3+jGKi5rG4rnycd4hKBuH1nt2plM+DXgL0cdtuoDMYP/1+f8JE4rkKbfM4f91wJYPFrb65eR6Wvp4PVnbh178nA893lBmOfqKt04jPGbijup5XmxhmHXBcy9u3Ptb4RRm4PXPMypm9LIuFyr7gOlWyapRUkX4OLCe+/NG/LgOltnq/s8v9rjIPelV2c5vvHtdDr70eGlcy2Mx0t36+j5d58h5V6jmDcpssi4Xvrwfb4/Nw13oQSqR63mwyGXe8KzPoxSoZKHUYiV4b89T/7r4gehD37gtD6S7kraqmWgambNTFgm99sz6w7XIs+dX64HIGkVqJM42D9EbCr9TIQEWxqXG/MujPu3XR6RWrrBPjUwX4WSfW3chAbbbjWbCS9bOH85BmBupYLHzuC633hH057PmHmf/nKjBamwKj8TzUMgi/vnOzHpyCHMrmmWN5VDsDM7ftzwzqnNP6cPBsy/Y21T47E1hQ+5hqBplIlo3SbZJMRqJ/2hdJmBT69B0U+rttXcxWZS6tSTA9fn+5OY+b/z8wF2u5rKXyzjwYqCyN9Wuos9Rt+p2Rbr3O2/+7eCPJ35sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuNsfZlklS4Gpk88AAAAASUVORK5CYII="
        // src="https://www.programming-hero.com/header/ph_logo.svg"
        src={nextImage}
        width={500}
        height={500}
        alt="next logo"
      />
      <h1> Using img tag</h1>
      <img
        // src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAdVBMVEX///8AAAAiIiIWFhZ0dHQcHBzz8/MlJSW5ubk7OzsfHx/Hx8cODg4vLy+YmJikpKRISEgSEhJ/f39vb2/AwMDr6+tXV1e3t7eOjo74+PjJycloaGg/Pz/h4eGHh4c0NDTY2Nitra2bm5t6enphYWFOTk7S0tLuyumXAAAC3klEQVR4nO3Y6XaqMBSG4WwQB8QBGR1ARev9X+JJ0FYG9VSX9dh13ucPlCaWfIZkU6UAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+h6F/fwBso4m7rWhJ0Zua47Nywm9c79YNOJ9Dd0uBC42X+ksE8aCIyaV4bi7c2R7Fv8JxNtc9ON5ZAdVcXOvmSvmg0jynEksGmcc1zBuYoluXLFb7lVsKLBp7lSKKG1SauZdnliXN45YjuNw/EdaQ+sc8Z+Gm/JSyleoiyP3UIxbG8Uaa6/eHZYeXau4U+Ceetv/puQrH1151UrpwzkOHVbgs9bt/NzOlMTxhZtlpMHa948r3+jGKi5rG4rnycd4hKBuH1nt2plM+DXgL0cdtuoDMYP/1+f8JE4rkKbfM4f91wJYPFrb65eR6Wvp4PVnbh178nA893lBmOfqKt04jPGbijup5XmxhmHXBcy9u3Ptb4RRm4PXPMypm9LIuFyr7gOlWyapRUkX4OLCe+/NG/LgOltnq/s8v9rjIPelV2c5vvHtdDr70eGlcy2Mx0t36+j5d58h5V6jmDcpssi4Xvrwfb4/Nw13oQSqR63mwyGXe8KzPoxSoZKHUYiV4b89T/7r4gehD37gtD6S7kraqmWgambNTFgm99sz6w7XIs+dX64HIGkVqJM42D9EbCr9TIQEWxqXG/MujPu3XR6RWrrBPjUwX4WSfW3chAbbbjWbCS9bOH85BmBupYLHzuC633hH057PmHmf/nKjBamwKj8TzUMgi/vnOzHpyCHMrmmWN5VDsDM7ftzwzqnNP6cPBsy/Y21T47E1hQ+5hqBplIlo3SbZJMRqJ/2hdJmBT69B0U+rttXcxWZS6tSTA9fn+5OY+b/z8wF2u5rKXyzjwYqCyN9Wuos9Rt+p2Rbr3O2/+7eCPJ35sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuNsfZlklS4Gpk88AAAAASUVORK5CYII="
        // src="https://www.programming-hero.com/header/ph_logo.svg"
        src="https://img.freepik.com/free-vector/mobile-tech-landing-page_23-2148716511.jpg?w=2000&t=st=1697810503~exp=1697811103~hmac=dc6f06075ad0eb915805c187e753740096ede2da94f6b4b3f930adc676e9b962"
        width="500px"
        height="500px"
        alt="next logo"
      />
    </div>
  );
};

export default AlbumPage;
