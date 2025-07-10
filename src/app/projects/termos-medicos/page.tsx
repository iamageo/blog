import Image from "next/image";
import Link from "next/link";
import { Apple } from "lucide-react";
import { BackToProjectsButton } from "@/src/components/back-button";

export default function TermosMedicosPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-10 px-4 py-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <Image
          src="/projects/termos-medicos-logo.webp"
          alt="Termos Médicos"
          width={120}
          height={120}
          className="rounded-[32px]"
        />
        <h1 className="text-3xl font-semibold">Termos Médicos</h1>
        <a
          href="https://apps.apple.com/us/app/termos-m%C3%A9dicos/id6469733188"
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
          Esta política de privacidade aplica-se ao aplicativo Termos Médicos (doravante referido como "Aplicativo") para dispositivos móveis, criado por Geovani Amaral (doravante referido como "Prestador de Serviço") como um serviço gratuito. Este serviço é fornecido "COMO ESTÁ".
        </p>

        <h3 className="text-xl font-semibold">Coleta e Uso de Informações</h3>
        <p>O Aplicativo coleta informações quando você o baixa e utiliza. Essas informações podem incluir:</p>
        <ul className="list-disc pl-6">
          <li>O endereço IP do seu dispositivo</li>
          <li>As páginas do Aplicativo que você visita, o horário e a data da visita, o tempo gasto nessas páginas</li>
          <li>O tempo gasto no Aplicativo</li>
          <li>O sistema operacional usado no seu dispositivo móvel</li>
        </ul>
        <p>O Aplicativo não coleta informações precisas sobre a localização do seu dispositivo móvel.</p>
        <p>O Prestador de Serviço pode usar as informações fornecidas para contatá-lo ocasionalmente com informações importantes, avisos e promoções de marketing.</p>
        <p>Para uma melhor experiência ao usar o Aplicativo, o Prestador de Serviço pode solicitar certas informações pessoalmente identificáveis. As informações solicitadas serão retidas e usadas conforme descrito nesta política de privacidade.</p>

        <h3 className="text-xl font-semibold">Acesso por Terceiros</h3>
        <p>Apenas dados agregados e anonimizados são periodicamente transmitidos a serviços externos para ajudar o Prestador de Serviço a melhorar o Aplicativo e seu serviço. O Prestador de Serviço pode compartilhar suas informações com terceiros conforme descrito nesta política.</p>
        <p>Note que o Aplicativo utiliza serviços de terceiros que possuem suas próprias Políticas de Privacidade sobre o tratamento de dados. Abaixo estão os serviços utilizados:</p>
        <ul className="list-disc pl-6">
          <li>Google Play Services</li>
          <li>AdMob</li>
          <li>Google Analytics para Firebase</li>
          <li>Firebase Crashlytics</li>
        </ul>
        <p>O Prestador de Serviço pode divulgar Informações:</p>
        <ul className="list-disc pl-6">
          <li>Quando exigido por lei</li>
          <li>Quando acredita de boa fé que é necessário para proteger direitos, segurança ou responder a autoridades</li>
          <li>Com prestadores de serviços confiáveis que concordam com esta política</li>
        </ul>

        <h3 className="text-xl font-semibold">Direitos de Exclusão</h3>
        <p>Você pode interromper a coleta de informações pelo Aplicativo desinstalando-o. Use os processos padrão de desinstalação disponíveis no seu dispositivo móvel ou na loja de aplicativos.</p>

        <h3 className="text-xl font-semibold">Política de Retenção de Dados</h3>
        <p>Os dados serão mantidos enquanto você utilizar o Aplicativo e por um tempo razoável após. Para solicitar exclusão, envie e-mail para <a href="mailto:contato@iamageo.dev" className="underline">contato@iamageo.dev</a>.</p>

        <h3 className="text-xl font-semibold">Crianças</h3>
        <p>O Aplicativo não é destinado a menores de 13 anos. O Prestador de Serviço não coleta intencionalmente informações pessoais de crianças. Caso isso ocorra, as informações serão excluídas. Se você for responsável por uma criança que forneceu dados, entre em contato.</p>

        <h3 className="text-xl font-semibold">Segurança</h3>
        <p>O Prestador de Serviço preocupa-se com a proteção da confidencialidade das suas informações. São aplicadas medidas físicas, eletrônicas e processuais para proteção.</p>

        <h3 className="text-xl font-semibold">Alterações</h3>
        <p>Esta Política poderá ser atualizada a qualquer momento. O uso contínuo do Aplicativo será considerado aceitação das novas condições.</p>
        <p><strong>Data de vigência:</strong> 21/11/2024</p>

        <h3 className="text-xl font-semibold">Seu Consentimento</h3>
        <p>Ao usar o Aplicativo, você consente com o processamento das informações conforme descrito nesta Política.</p>

        <h3 className="text-xl font-semibold">Contate-nos</h3>
        <p>Dúvidas? Escreva para: <a href="mailto:contato@iamageo.dev" className="underline">contato@iamageo.dev</a></p>
      </article>

      <BackToProjectsButton />

    </div>
  );
}