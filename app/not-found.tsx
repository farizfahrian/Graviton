import styles from '../styles/notfound.module.css'; // Correct the styles import
import Image from 'next/image';

export default function NotFound() {
  return (
    <>
      <section className="notfound">
        <div className="container d-flex justify-content-center my-0 mt-4">
          <Image className={`img-fluid ${styles.notFoundImage}`} src="/img/not-found.png" height={500} width={500} alt="page not found" />
        </div>
        <div className="container text-center container-tambahan">
          <h1>Halaman yang anda cari belum tersedia.</h1>
        </div>
      </section>
    </>
  );
}
