import Image from "next/image";
import Link from "next/link";
import { Apple } from "lucide-react";
import { BackToProjectsButton } from "@/src/components/back-button";

export default function AbacatoPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-10 px-4 py-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <Image
          src="/projects/abacato-logo.webp"
          alt="Abacato"
          width={120}
          height={120}
          className="rounded-[32px]"
        />
        <h1 className="text-3xl font-semibold">Abacato</h1>
        <a
          href="https://apps.apple.com/us/app/abacato/id6740468183"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded bg-black px-4 py-2 text-white transition hover:bg-zinc-800"
        >
          <Apple className="size-5" /> Download on the App Store
        </a>
      </div>

      <article className="space-y-4 text-lg">
        <h2 className="text-2xl font-semibold">Política de Privacidade</h2>

        <p>
          Esta política de privacidade se aplica ao aplicativo Abacato (doravante denominado "Aplicativo") para dispositivos móveis, criado por Geovani Amaral (doravante denominado "Provedor de Serviço") como um serviço gratuito. Este serviço é fornecido "COMO ESTÁ".
        </p>

        <h3 className="text-xl font-semibold">Coleta e Uso de Informações</h3>
        <p>O Aplicativo coleta informações quando você o baixa e utiliza. Essas informações podem incluir:</p>
        <ul className="list-disc pl-6">
          <li>O endereço IP do seu dispositivo</li>
          <li>As páginas do Aplicativo que você visita, o horário e a data da visita, o tempo gasto nessas páginas</li>
          <li>O sistema operacional do seu dispositivo móvel</li>
        </ul>
        <p>O Aplicativo não coleta informações precisas sobre a localização do seu dispositivo móvel.</p>
        <p>O Provedor de Serviço pode usar as informações fornecidas para entrar em contato com você ocasionalmente, com atualizações importantes, avisos obrigatórios ou ofertas promocionais.</p>

        <h3 className="text-xl font-semibold">Acesso de Terceiros</h3>
        <p>Dados agregados e anonimizados podem ser transmitidos periodicamente a serviços externos para ajudar a melhorar o Aplicativo e os serviços oferecidos. Abaixo estão os serviços utilizados:</p>
        <ul className="list-disc pl-6">
          <li>Google Play Services</li>
        </ul>

        <h3 className="text-xl font-semibold">Direito de Opt-Out</h3>
        <p>Você pode interromper toda a coleta de informações pelo Aplicativo desinstalando-o. Use o processo padrão de desinstalação disponível no seu dispositivo móvel.</p>

        <h3 className="text-xl font-semibold">Política de Retenção de Dados</h3>
        <p>O Provedor de Serviço reterá seus dados enquanto você utilizar o Aplicativo e por um período razoável depois disso. Para solicitar a exclusão de seus dados, entre em contato com o Provedor de Serviço pelo e-mail <a href="mailto:contato@iamageo.dev" className="underline">contato@iamageo.dev</a>.</p>

        <h3 className="text-xl font-semibold">Crianças</h3>
        <p>O Provedor de Serviço não coleta intencionalmente dados de crianças menores de 13 anos. Caso descubra que uma criança menor de 13 anos forneceu informações pessoais, o Provedor de Serviço as excluirá imediatamente. Se você é pai ou responsável e acredita que seu filho forneceu informações pessoais, entre em contato.</p>

        <h3 className="text-xl font-semibold">Segurança</h3>
        <p>O Provedor de Serviço está comprometido em proteger suas informações através de medidas físicas, eletrônicas e processuais.</p>

        <h3 className="text-xl font-semibold">Alterações</h3>
        <p>Esta Política de Privacidade pode ser atualizada periodicamente. As alterações serão publicadas nesta página. O uso contínuo do Aplicativo implica na aceitação das mudanças.</p>
        <p><strong>Data de vigência:</strong> 19/01/2025</p>

        <h3 className="text-xl font-semibold">Seu Consentimento</h3>
        <p>Ao utilizar o Aplicativo, você consente com o processamento de suas informações conforme descrito nesta Política de Privacidade.</p>

        <h3 className="text-xl font-semibold">Fale Conosco</h3>
        <p>Se você tiver dúvidas sobre privacidade ou esta Política de Privacidade, entre em contato com o Provedor de Serviço pelo e-mail <a href="mailto:contato@iamageo.dev" className="underline">contato@iamageo.dev</a>.</p>
      </article>
      
      <BackToProjectsButton/>

    </div>
  );
}