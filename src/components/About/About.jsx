import useInView from '../../hooks/useInView'
import styles from './About.module.css'

export default function About() {
  const [ref, inView] = useInView()

  return (
    <section id="about" className={styles.about}>
      <div className="container" ref={ref}>
        <div className={styles.layout}>

          {/* Visual */}
          <div className={`${styles.visual} ${inView ? styles.visible : ''}`}>
            <div className={styles.frame}>
              <div className={styles.frameBg} />
              <EagleSvg />
              <div className={styles.ring} />
              <span className={`${styles.corner} ${styles.tl}`} />
              <span className={`${styles.corner} ${styles.tr}`} />
              <span className={`${styles.corner} ${styles.bl}`} />
              <span className={`${styles.corner} ${styles.br}`} />
            </div>
            <div className={styles.tag}>
              <span>Peter Mushi</span>
              <span className={styles.tagDot}>·</span>
              <span>East Africa</span>
            </div>
          </div>

          {/* Copy */}
          <div className={`${styles.copy} ${inView ? styles.visible : ''}`}>
            <div className="section-label">Philosophy</div>
            <h2 className="section-heading">
              Access is not<br />given. It is built.
            </h2>
            <p className={styles.bodyPrimary}>
              At the intersection of capital, relationships, and opportunity lives a rare kind of operator — one who understands not just what deals look like, but how they move.
            </p>
            <p className={styles.bodySecondary}>
              Peter Mushi operates across East Africa and international markets, building on a practice grounded in discretion, precision, and a network cultivated over more than a decade of high-level engagement. Whether facilitating investment, structuring partnerships, or opening doors that remain closed to most — the work is quiet, intentional, and consistently effective.
            </p>
            <ul className={styles.pillars}>
              {['Strategic Discretion', 'Network Depth', 'Cross-Border Intelligence'].map(p => (
                <li key={p} className={styles.pillar}>
                  <span className={styles.dash}>—</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

function EagleSvg() {
  return (
    <svg className={styles.eagle} viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="eg" x1="10%" y1="0%" x2="90%" y2="100%">
          <stop offset="0%"   stopColor="#FFD740" stopOpacity="0.95"/>
          <stop offset="55%"  stopColor="#FEC700" stopOpacity="0.9"/>
          <stop offset="100%" stopColor="#C49A00" stopOpacity="0.8"/>
        </linearGradient>
        <filter id="eglow" x="-10%" y="-10%" width="120%" height="120%">
          <feGaussianBlur stdDeviation="3" result="b"/>
          <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Body — diagonal ellipse, upper-left (tail) to lower-right (head) */}
      <ellipse cx="252" cy="255" rx="22" ry="96" transform="rotate(38 252 255)" fill="url(#eg)" filter="url(#eglow)"/>

      {/* Head */}
      <ellipse cx="336" cy="352" rx="27" ry="25" fill="url(#eg)" filter="url(#eglow)"/>

      {/* Beak — hooked, pointing lower-right */}
      <path d="M356 358 Q384 368 376 380 Q364 385 354 376 Z" fill="url(#eg)"/>

      {/* Neck bridge */}
      <path d="M293 298 C308 314 318 330 322 348 C326 360 324 368 315 370 C305 372 295 362 292 348 C287 330 284 312 293 298Z" fill="url(#eg)"/>

      {/* Left wing — sweeps upper-left, feather layers */}
      <path d="
        M 232 228
        C 200 210 158 192 112 172
        C 70 154 32 138 8 124
        C 16 140 35 150 60 162
        C 96 178 140 195 175 210
        C 152 204 112 188 78 172
        C 100 188 142 206 178 220
        C 158 214 120 199 88 184
        C 110 200 150 215 188 226
        C 170 221 136 207 106 193
        C 128 208 164 222 200 230
        L 235 236 Z
      " fill="url(#eg)" filter="url(#eglow)"/>

      {/* Left wing lower blade */}
      <path d="
        M 228 240
        C 196 252 155 264 110 275
        C 72 284 38 288 14 285
        C 25 296 50 296 80 290
        C 118 282 160 270 196 258
        L 228 248 Z
      " fill="url(#eg)" opacity="0.7"/>

      {/* Right wing — sweeps upper-right */}
      <path d="
        M 272 278
        C 305 258 348 238 395 218
        C 438 200 472 185 492 170
        C 482 186 464 196 440 208
        C 402 224 358 242 320 258
        C 344 252 385 235 420 218
        C 394 233 352 250 315 266
        C 338 259 378 242 412 225
        C 385 240 343 257 304 272
        C 326 264 365 248 398 232
        C 370 248 330 263 290 276
        L 270 282 Z
      " fill="url(#eg)" filter="url(#eglow)"/>

      {/* Right wing lower blade */}
      <path d="
        M 278 288
        C 310 300 352 312 396 322
        C 432 330 465 332 488 328
        C 476 340 448 340 415 334
        C 374 326 330 313 295 300
        L 275 294 Z
      " fill="url(#eg)" opacity="0.7"/>

      {/* Tail feathers — fan at upper-left */}
      <path d="M 214 194 C 206 178 196 160 180 146 L 186 143 C 200 157 210 174 216 190Z" fill="url(#eg)"/>
      <path d="M 220 190 C 214 172 206 154 194 139 L 200 136 C 211 150 218 168 222 186Z" fill="url(#eg)"/>
      <path d="M 226 187 C 222 168 217 150 208 134 L 214 132 C 222 148 226 166 228 184Z" fill="url(#eg)"/>
      <path d="M 232 186 C 230 166 227 148 222 132 L 228 130 C 232 146 234 164 234 183Z" fill="url(#eg)"/>
      <path d="M 238 186 C 238 166 237 148 234 132 L 240 131 C 242 147 242 165 240 184Z" fill="url(#eg)"/>
      <path d="M 244 188 C 246 168 247 150 246 134 L 252 134 C 252 150 250 168 246 186Z" fill="url(#eg)"/>

      {/* Talons */}
      <path d="M 348 372 C 354 382 358 393 358 404 C 354 395 351 383 347 374Z" fill="url(#eg)" opacity="0.85"/>
      <path d="M 358 376 C 364 386 368 398 366 408 C 362 399 360 386 357 377Z" fill="url(#eg)" opacity="0.85"/>
      <path d="M 368 374 C 373 384 376 396 373 406 C 370 397 368 384 366 375Z" fill="url(#eg)" opacity="0.85"/>
    </svg>
  )
}
