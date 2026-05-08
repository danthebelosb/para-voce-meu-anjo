import { useEffect, useMemo, useRef, useState } from 'react';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isStickerOpen, setIsStickerOpen] = useState(false);

  const circles = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => {
      const size = 40 + Math.random() * 140;
      return (
        <span
          key={i}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${24 + Math.random() * 30}s`,
            animationDelay: `-${Math.random() * 30}s`,
          }}
        />
      );
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach((el) => observer.observe(el));

    return () => {
      reveals.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="ambient" id="ambient" ref={containerRef}>
        {circles}
      </div>

      <main>
        <section className="hero">
          <div className="floral">❀</div>
          <h1>
            Para você,<br />
            <span className="script">meu anjo, minha paz</span>
          </h1>
          <div className="ornament"></div>
          <p className="subtitle">
            para você ler quando precisar lembrar, quantas vezes for preciso.
          </p>
          <div className="scroll-hint">role para baixo ↓</div>
        </section>

        <section className="reveal">
          <div className="eyebrow">uma carta</div>
          <h2>
            Antes de <span className="em">tudo</span>
          </h2>
          <div className="divider"></div>

          <div className="letter">
            <div className="letter-body">
              <p>
                Sei que não existe nada que eu fale que será capaz de aliviar o
                que você está sentindo nesse momento, isso é algo extremamente
                interno seu, não tenho dúvidas de que você sabe que eu te amo,
                que seus amigos e sua família também te ama. Mas acho que o que
                está mais pegando agora não é isso, é seu interno, seu íntimo, e
                tudo é válido você sentir agora, acho que nesse momento você não
                deve lutar contra si mesmo, acho que você deve validar cada
                sentimento, cada pensamento que passa pela sua cabeça. Mas
                mesmo validando essa tempestade aí dentro, eu queria que você não
                perdesse de vista a pessoa que está no centro dela, a pessoa
                mais linda e querida que Jeová colocou no mundo. O que aconteceu
                foi um evento muito singular dado aos outros eventos que
                sucederam, falamos disso mais cedo e é real, parecia até que
                tinha que acontecer. Mas ele não apaga quem você é, não apaga
                sua força, nem sua luz. Você é muito maior que esse momento
                difícil. Você é riso, você é paz, você é carinho, você é
                inteligência que surpreende todos, é essa alma que Jeová fez
                questão de manter aqui conosco. E EU e todos nós estamos aqui
                agora para segurar sua mão, por mais que você insista conhecendo
                você segurar sozinha, estou aqui para ser sua âncora, para seu
                acalento quando necessário. Nesse momento queria te dar um
                abraço, mas infelizmente me parece meio impossível, então receba
                esse texto como um abraço, como um beijo, como um carinho.
              </p>

              <p>
                Agora apenas se permita SER... Não tente entender tudo hoje, não
                tente resolver tudo na segunda. Apenas respire. Deixe que seu
                Jeová que você tem tanta fé, cuide do que é pesado para seus
                ombros (ou coluna, rs), e deixe que eu estarei aqui cuidando de
                te lembrar todos os dias se for preciso do quão incrível você é.
                Descanse seu coração em mim, em Jeová e em si mesmo, fecha os
                olhos e sente o quanto você é amada. E estou e estarei sempre
                aqui a um pensamento de distância.
              </p>
            </div>
            <div className="signature">
              Danthe Belo
              <small>always, stets</small>
            </div>
          </div>
        </section>

        <section className="reveal">
          <div className="eyebrow">o que eu vejo</div>
          <h2>
            Tudo que <span className="em">é você</span>
          </h2>
          <div className="divider"></div>

          <div className="mosaic">
            <div className="moment">
              <div className="icon">❀</div>
              <h3>O cabelo</h3>
              <p className="text">
                Dona do cabelo mais lindo que Jeová já fez, que só de sentir ele
                é capaz de melhorar meu dia. Quando entrelaço meus dedos nele,
                sinto o poder que algo tão belo e cheiroso tem sobre mim.
              </p>
            </div>

            <div className="moment">
              <div className="icon">❀</div>
              <h3>O rosto</h3>
              <p className="text">
                Dona do rosto mais encantador. É tão encantador que eu me perco
                em quantas vezes me peguei olhando para ele e admirando,
                pensando em como alguém pode ser tão bela, como cada detalhe,
                desde o olho até a boca mais macia que alguém pode ter.
              </p>
            </div>

            <div className="moment">
              <div className="icon">❀</div>
              <h3>O perfume</h3>
              <p className="text">
                Dona também do cheiro mais incrível. Tão incrível que eu seria
                capaz de viver apenas sentindo o seu perfume. E o seu cheiro é
                especial porque não é apenas em um lugar, é no seu corpo todo.
              </p>
            </div>

            <div className="moment">
              <div className="icon">❀</div>
              <h3>Nosso abraço</h3>
              <p className="text">
                E o que falar do nosso abraço? É o momento em que o mundo para.
                Tudo que eu queria nesse momento difícil que você passou e está
                passando era te abraçar 24h por dia, 7 dias por semana, pra que
                você se acalmasse um pouco, pois sei do poder terapêutico que ele
                tem. Quero que saiba que meu abraço está sempre aqui por você.
              </p>
            </div>

            <div className="moment">
              <div className="icon">❀</div>
              <h3>Nossas comidas</h3>
              <p className="text">
                As nossas comidas são muito especiais. E aqui estou te dando uma
                intimação pra sairmos pra comer até o dia 30 de maio. Te deixo
                escolher o dia, mas nesse momento a gente precisa de uma comida
                boa e de uma conversa melhor ainda.
              </p>
            </div>

            <div className="moment">
              <div className="icon">❀</div>
              <h3>O simples fato</h3>
              <p className="text">
                E talvez o que mais me encanta seja isso: você não precisa fazer
                nada. Você é encantadora pelo simples fato de existir. É uma
                coisa sua, que vem sem esforço, que está no jeito de você ser.
                Onde você passa, fica mais bonito.
              </p>
            </div>
          </div>
        </section>

        <section className="gentle reveal">
          <div className="eyebrow">e sobre aquilo</div>
          <h2>
            O seu <span className="em">perfeccionismo</span>
          </h2>
          <div className="divider"></div>

          <div className="body">
            <p>
              Eu sei do perfeccionismo que você carrega, sei do quanto você quer
              sempre ser a melhor (e você é). Mas quero te lembrar de uma coisa:
              o que sua cabeça às vezes chama de defeito, eu chamo de cuidado.
              Esse jeito seu de querer fazer tudo bem feito, de não deixar passar,
              de se entregar inteira no que você faz, é o tamanho do seu coração
              aparecendo pro mundo.
            </p>

            <p>
              Só que hoje, e nesses dias que vierem, eu te peço uma coisa: seja
              com você a mesma gentileza que você tem com todo mundo. Você não
              precisa ser perfeita pra ser amada. Você JÁ é, do jeito que você é,
              com força e com cansaço, com luz e com dia ruim. Jeová não te
              trouxe aqui pra ser inteira o tempo todo. Te trouxe pra ser você.
              E quando você esquecer disso, eu lembro por você. Quantas vezes
              for preciso.
            </p>
          </div>

          <blockquote>
            você é riso, você é paz,<br />
            você é carinho.
          </blockquote>
        </section>

        <section className="gentle reveal" style={{ marginTop: '2rem' }}>
          <div className="eyebrow">por fim</div>
          <h2>
            O seu <span className="em">brilho</span>
          </h2>
          <div className="divider"></div>

          <div className="body">
            <p>
              Por fim quero te dizer que nada, e nem nenhuma situação vai ser capaz
              de tirar o brilho que existe dentro de você, nada é capaz de apagar o
              brilho de quem Jeová fez com tanto cuidado, que fez de forma única.
              Laura, eu não faço ideia do peso dos seus pensamentos nesse momento,
              sei que com certeza não estão fáceis, mas eu estou aqui, e estarei
              sempre.
            </p>

            <p>
              Em todas vidas que eu pudesse vir a ter, entre tudo que já me ocorreu
              e mesmo com nossas dificuldades, eu sempre serei grato por ter você na
              minha vida e pode ter certeza que todos pensam a mesma coisa de você.
              Eu te amo e estou ao seu lado para o que seja necessário, seja
              momentos ruins como o de ontem ou momentos bons como nosso abraço.
            </p>
          </div>
        </section>

        <section className="reveal" style={{ maxWidth: '760px', textAlign: 'center' }}>
          <div className="eyebrow">uma pausa</div>
          <h2>
            Para a sua <span className="em">alma</span>
          </h2>
          <div className="divider" style={{ marginBottom: '2rem' }}></div>
          
          <p style={{ color: 'var(--ink-soft)', marginBottom: '2.5rem', fontStyle: 'italic', fontSize: '1.2rem' }}>
            Deixei essa playlist para esse momento não tão legal que você está
            passando. São músicas de reflexão para acalmar tudo aí dentro.
          </p>

          <iframe 
            style={{ borderRadius: '12px', boxShadow: '0 20px 40px rgba(58, 42, 34, 0.08)' }} 
            src="https://open.spotify.com/embed/playlist/5bon7784pdgp1K0NvRbG2P?utm_source=generator&theme=0" 
            width="100%" 
            height="352" 
            frameBorder="0" 
            allowFullScreen 
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
            loading="lazy"
          ></iframe>
        </section>

        <section className="reveal">
          <div className="eyebrow">um pedido</div>
          <h2>
            Convite <span className="em">especial</span>
          </h2>
          <div className="divider"></div>

          <div className="invite-wrap">
            <div className="invite">
              <div className="header">⟡ Convite ⟡</div>
              <h3>
                Uma comida,<br />
                com você
              </h3>
              <p className="body">
                Fica intimada. Uma comida boa e uma conversa ainda melhor te
                esperam.<br />
                Você escolhe o dia. Eu cuido do resto.
              </p>
              <div className="date">até 30 de maio</div>
              <div className="rsvp">resposta esperada · com saudade</div>
            </div>
          </div>
        </section>

        <section className="sticker-surprise reveal">
          <div className="eyebrow">uma figurinha</div>
          <h2>
            Envelope <span className="em">especial</span>
          </h2>
          <div className="divider"></div>

          <div className={`sticker-pack ${isStickerOpen ? 'open' : ''}`}>
            <button
              className="envelope"
              type="button"
              aria-expanded={isStickerOpen}
              onClick={() => setIsStickerOpen(true)}
            >
              <span className="envelope-flap"></span>
              <span className="envelope-front">
                <span className="pack-label">Abrir envelope</span>
                <span className="pack-subtitle">figurinha rara</span>
              </span>
            </button>

            <div className="sticker-reveal" aria-hidden={!isStickerOpen}>
              <div className="sticker-card">
                <img
                  src="/laura-figurinha.png"
                  alt="Figurinha da Laura"
                  loading="lazy"
                />
              </div>
              <p>
                No álbum da minha vida você sempre será a figura mais rara
              </p>
            </div>
          </div>
        </section>

        <section className="closing reveal">
          <div className="heart">❀</div>
          <p className="final">a um pensamento de distância.</p>
          <p className="always">always, stets</p>
          <div className="signature-final">Danthe Belo</div>
        </section>
      </main>

      <footer>feito com cuidado · maio de 2026</footer>
    </>
  );
}
