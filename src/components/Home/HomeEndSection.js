import { sortBlogs } from '@/src/utils'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Tag from '../Elements/Tag';
import { slug } from 'github-slugger';

const HomeEndSection = ({blogs}) => {


  return (
    <div className='w-full inline-block h-1/2 text-white '>
       <div className='dark:bg-yellow-400 bg-black    grid dark:text-light '>
        <h1 className=' inline-block items-center flex  justify-center text-4xl'>
            Pakketten
        </h1>
        <br></br>
        <div className='flex gap-5 items-center justify-center cols-3'>
        <div>
        <h2 className='text-3xl'>
            Basis pakket
        </h2>
        <h3>
            -Website<br></br>
            -SEO<br></br>
            -Standaard design<br></br>
            -Standaard homepage<br></br>
            -5 vervolgpagina's<br></br>
            -2 correctie rondes<br></br>
            -Volledig responsive<br></br>
            -Gebouwd in Elementor<br></br>
            -Email<br></br>
            -support

        </h3>
        <div>

       </div>
        <p>
        ~ € 500 
        </p>
        </div>
        <div>
        <h2 className='text-3xl'>
            Uitgebreide pakket
        </h2>
        <h3>
        -Website<br></br>
        -SEO<br></br>
        Premium design<br></br>
        Custom<br></br>
        homepage<br></br>
        10 vervolgpagina's<br></br>
        3 correctie rondes<br></br>
        Volledig responsive<br></br>
        Gebouwd in Elementor Pro<br></br>
        Email & telefonische support
        </h3>
        <div>
 
        </div>
        <p>
        ~ €750
        </p>
        </div>        <div>
        <h2 className='text-3xl'>
            Maatwerk
        </h2>
        <h3 >
        -Website<br></br>
        -SEO<br></br>
        Premium design<br></br>
        Custom homepage<br></br>
        ∞ vervolgpagina's<br></br>
        ∞ correctie rondes<br></br>
        Volledig responsive<br></br>
        Gebouwd in Elementor Pro<br></br>
        Email & telefonische support
        </h3>
        <div>
   
        </div>
        <p>
        neem contact op
        </p>
        </div>


        </div>






       </div>
       <div className='dark:bg-black bg-black'>
       <p class="mb-4">
    In een tijd waarin jouw online aanwezigheid belangrijker is dan ooit, biedt <strong>Sun-Digital</strong> 
     een oplossing die verder gaat dan alleen een mooie website. Wij zijn gespecialiseerd in 
    <em>professioneel webdesign</em> dat niet alleen aantrekkelijk oogt, maar ook functioneel is, 
    geoptimaliseerd voor zoekmachines en ontworpen om resultaten te leveren. Of je nu een nieuwe 
    website nodig hebt of je huidige site wilt laten groeien, wij helpen jou je doelen te bereiken.
  </p>

  <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Waarom Kiezen voor Sun-Digital?</h2>
  <p class="mb-4">
    Bij Sun-Digital begrijpen we dat elke klant uniek is. Daarom bieden wij maatwerkoplossingen die 
    aansluiten bij jouw specifieke wensen en behoeften. Onze werkwijze is gebaseerd op persoonlijke aandacht, 
    technische expertise en een passie voor creativiteit. Dit zijn slechts enkele redenen waarom bedrijven 
    uit diverse sectoren ons kiezen:
  </p>
  <ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Maatwerk webdesign</strong>: Wij ontwerpen websites die jouw merk perfect vertegenwoordigen.</li>
    <li><strong>Responsive design</strong>: Jouw website werkt vlekkeloos op elk apparaat, van smartphone tot desktop.</li>
    <li><strong>SEO-optimalisatie</strong>: Wij zorgen ervoor dat jouw website beter vindbaar is in zoekmachines zoals Google.</li>
    <li><strong>Snelheid en veiligheid</strong>: Snelle laadtijden en een beveiligde omgeving voor een optimale gebruikerservaring.</li>
  </ul>

  <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Onze Aanpak</h2>
  <p class="mb-4">
    Een succesvol webdesign begint bij een goed begrip van jouw doelen. Bij Sun-Digital hanteren wij een 
    stapsgewijze aanpak om ervoor te zorgen dat jouw website niet alleen functioneel is, maar ook conversies 
    genereert:
  </p>
  <ol class="list-decimal list-inside space-y-2 mb-4 pl-4">
    <li><strong>Intake en Analyse</strong>: Tijdens een persoonlijk gesprek brengen we jouw wensen en doelen in kaart.</li>
    <li><strong>Ontwerp en Concept</strong>: Op basis van jouw input creëren wij een visueel aantrekkelijk en gebruiksvriendelijk ontwerp.</li>
    <li><strong>Ontwikkeling</strong>: Onze developers bouwen een website die zowel technisch als visueel aan de hoogste standaarden voldoet.</li>
    <li><strong>Testen en Lancering</strong>: We testen de website uitvoerig en zorgen voor een vlekkeloze livegang.</li>
    <li><strong>Onderhoud en Optimalisatie</strong>: Ook na de lancering blijven we betrokken voor updates en verbeteringen.</li>
  </ol>

  <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Geoptimaliseerd voor Zoekmachines (SEO)</h2>
  <p class="mb-4">
    Wat heb je aan een mooie website als niemand hem kan vinden? Bij Sun-Digital zorgen we ervoor dat jouw 
    website hoog scoort in zoekmachines. Dit doen we door het toepassen van de laatste 
    <a href="/seo-webdesign" class="text-blue-600 underline hover:text-blue-800" title="SEO-webdesign strategieën">SEO-strategieën</a>, zoals:
  </p>
  <ul class="list-disc list-inside space-y-2 mb-4">
    <li>Gebruik van relevante zoekwoorden en long-tail keywords.</li>
    <li>Snelle laadtijden en technische optimalisaties.</li>
    <li>Mobielvriendelijkheid en een uitstekende gebruikerservaring.</li>
    <li>Het creëren van waardevolle content die aansluit bij jouw doelgroep.</li>
  </ul>
  <p class="mb-4">
    Ons doel is om jouw website niet alleen beter zichtbaar te maken, maar ook meer bezoekers te laten converteren.
  </p>

  <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Ons Portfolio</h2>
  <p class="mb-4">
    Wij hebben al talloze bedrijven geholpen om hun online aanwezigheid naar een hoger niveau te tillen. 
    Of het nu gaat om een eenvoudige informatieve website of een uitgebreide e-commerce oplossing, wij 
    hebben de ervaring en expertise om jouw project tot een succes te maken. Bekijk onze 
    <a href="/portfolio" class="text-blue-600 underline hover:text-blue-800" title="Bekijk ons portfolio">portfolio</a> om voorbeelden te zien van ons werk.
  </p>

  <h2 class="text-2xl font-semibold text-gray-900 mt-8 mb-4">Onze Extra Services</h2>
  <p class="mb-4">
    Naast webdesign biedt Sun-Digital een breed scala aan aanvullende diensten, zoals:
  </p>
  <ul class="list-disc list-inside space-y-2 mb-4">
    <li><strong>Content creatie</strong>: Professionele teksten en visuals die jouw boodschap versterken.</li>
    <li><strong>Hosting en onderhoud</strong>: Zorgeloos beheer van je website.</li>
    <li><strong>Marketingcampagnes</strong>: Meer traffic en conversies door doordachte online strategieën.</li>
  </ul>

  <p class="mt-8 text-center">
    <a href="/contact" class="inline-block px-6 py-3 bg-blue-600 text-white font-semibold text-lg rounded-md shadow-lg hover:bg-blue-800 transition-all" title="Neem contact op met Sun-Digital">Neem contact op</a>
  </p>
       </div>
    </div>

  )
}

export default HomeEndSection