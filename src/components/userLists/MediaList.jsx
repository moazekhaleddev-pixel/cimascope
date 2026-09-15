import styles from './MediaList.module.css'
import MediaItem from './MediaItem'
export default function MediaList({list ,page}) {
  return (
    <div className={styles.list}>
        {
            list.map(({id,type,title,posterPath,rate,year,overview})=>(
                <MediaItem item={
                  {id,title,type,posterPath,rate,year,overview}
                }
                page={page}
                />
            ))
        }
    </div>
  )
}
