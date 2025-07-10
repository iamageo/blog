import { BackToProjectsButton } from "@/src/components/back-button";
import Image from "next/image";
import Link from "next/link";

export default function consultaCnpj() {
  return (
    <div className="mx-auto max-w-2xl space-y-8 px-4 py-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <Image
          src="/projects/consulta-cnpj-logo.webp"
          alt="Consulta CNPJ 2025"
          width={120}
          height={120}
          className="rounded-[32px]"
        />
        <h1 className="text-3xl font-semibold">Consulta CNPJ</h1>
        <a
          href="https://apps.apple.com/us/app/consulta-cnpj-2025/id6687796780"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded bg-black px-4 py-2 text-white transition hover:bg-zinc-800"
        >
          Download on the App Store
        </a>
      </div>

      <article className="space-y-4 text-lg">
        <h2 className="text-2xl font-semibold">Política de Privacidade</h2>

        <p>
          Esta política de privacidade se aplica ao aplicativo Consulta CNPJ
          2024 (doravante denominado "Aplicação") para dispositivos móveis
          criado por Geovani Amaral (doravante denominado "Prestador de
          Serviços") como um serviço gratuito. Este serviço é fornecido "COMO
          ESTÁ".
        </p>

        <h3 className="text-xl font-semibold">Coleta e Uso de Informações</h3>
        <p>
          A Aplicação coleta informações quando você a baixa e a utiliza. Essas
          informações podem incluir:
        </p>
        <ul className="list-disc pl-6">
          <li>Endereço de IP do seu dispositivo</li>
          <li>Páginas acessadas, data, hora e tempo gasto</li>
          <li>Sistema operacional utilizado</li>
        </ul>
        <p>A Aplicação não coleta informações precisas sobre localização.</p>

        <p>
          O Prestador de Serviços pode usar as informações para contatá-lo com
          avisos, informações ou promoções. Certas informações poderão ser
          solicitadas para melhorar sua experiência.
        </p>

        <h3 className="text-xl font-semibold">Acesso de Terceiros</h3>
        <p>Dados agregados e anônimos podem ser enviados para terceiros:</p>
        <ul className="list-disc pl-6">
          <li>Google Play Services</li>
          <li>AdMob</li>
          <li>Firebase Crashlytics</li>
        </ul>
        <p>As informações também poderão ser compartilhadas:</p>
        <ul className="list-disc pl-6">
          <li>Quando exigido por lei</li>
          <li>Para proteção contra fraudes ou ameaças</li>
          <li>Com parceiros confiáveis que seguem esta política</li>
        </ul>

        <h3 className="text-xl font-semibold">Direitos de Exclusão</h3>
        <p>
          Você pode interromper a coleta de dados desinstalando o app. Para
          solicitar a exclusão dos dados, envie um e-mail para{" "}
          <a href="mailto:contato@iamageo.dev" className="underline">
            contato@iamageo.dev
          </a>
          .
        </p>

        <h3 className="text-xl font-semibold">Política de Retenção de Dados</h3>
        <p>
          Os dados serão mantidos enquanto você usar a Aplicação e por um tempo
          razoável após. Para exclusão, entre em contato por e-mail.
        </p>

        <h3 className="text-xl font-semibold">Crianças</h3>
        <p>
          A Aplicação não é direcionada a menores de 13 anos e não coleta
          intencionalmente dados pessoais de crianças. Caso isso ocorra, os
          dados serão excluídos.
        </p>

        <h3 className="text-xl font-semibold">Segurança</h3>
        <p>
          A confidencialidade das suas informações é protegida com salvaguardas
          físicas, eletrônicas e procedimentais.
        </p>

        <h3 className="text-xl font-semibold">Alterações</h3>
        <p>
          Esta política poderá ser atualizada. Consulte esta página
          periodicamente. O uso contínuo representa aceitação das alterações.
        </p>

        <h3 className="text-xl font-semibold">Seu Consentimento</h3>
        <p>
          Ao usar a Aplicação, você consente com esta política de privacidade.
        </p>

        <h3 className="text-xl font-semibold">Contate-nos</h3>
        <p>
          Dúvidas? Escreva para:{" "}
          <a href="mailto:contato@iamageo.dev" className="underline">
            contato@iamageo.dev
          </a>
        </p>
      </article>

      <BackToProjectsButton />

    </div>
  );
}
