import Image from "next/image"
import Pinksection from "@/app/(main)/components/ui/Pinksection"

export default function Page() {
    return (
      <>
      <Pinksection title="Quelqe mots à propos de nous..." />
      <div className="flex flex-col md:grid md:grid-cols-2 gap-5 p-10">
        <p className="col-span-2">Il nous ai tous déjà arrivé d'offrir des fleurs. 
          Que ce soit pour un événement ou juste pour se faire plaisir ou faire plaisir à un proche. 
          Les fleurs nous entourent, nous les aimons pour leurs odeurs, leurs couleurs, et leur forme. 
          Rare sont les foyers sans bougies. Utiles pour parfumer notre intérieur, 
          donner une ambiance agréable ou tous simplement pour sauver une soirée sans électricité. 
          Ces deux éléments nous entourent au quotidien et nous pouvons les trouver partout. 
          Mais pourquoi pas les combiner pour en faire un cadeau unique. Les fleurs sont disponibles 
          chez les fleuristes, les bougies dans les magasins de déco et bien d'autres. Mais rare 
          propose des bougies fleuries, naturelle bonne pour nous et notre environnement.
          A fleur de Pau à décidé d'associer ces deux éléments du quotidien pour vous faire plaisir 
          sans avoir à choisir.
        </p>
        <div className="flex flex-col items-center justify-center">
          <ol>
            <p>A fleur de Pau c est avant tout :</p>
            <li>Des bougies fleuries faites main</li>
            <li>Des modèles uniques</li>
            <li>De la cire végétale 100% soja renouvelable et biodégradable</li>
            <li>Des parfums français garantis sans CMR ( substances Cancérogènes, Mutagènes et Reprotoxiques)</li>
          </ol>
        </div>
        <Image className="max-w-xs justify-self-center" 
          src="/cibi-work.jpg" 
          width={1024}
          height={1365}
          alt="cibi working" 
        />
      </div>
      </>
    )
  }