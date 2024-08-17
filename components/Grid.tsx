import { gridItems } from '@/data'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'


const Grid = () => {
  return (
   <section id="about">
    <BentoGrid>
      {gridItems.map((item, i) => (
        <BentoGridItem 
          id={item.id}
          key={i}
          title={item.title}
          description={item.description}
          // className={i === 0 || i === 3 ? "md:col-span-2 md:row-span-2" : ""}
          className={item.className}
        />
      ))}
    </BentoGrid>
   </section>
  )
}

export default Grid