import {
  Body,
  Column,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface ContactThankYouEmailProps {
  year?: number;
  minutesSpentOnDocs?: number;
  uploadedDocuments?: number;
  sharedLinks?: number;
  receivedViews?: number;
  topDocumentName?: string;
  topDocumentViews?: number;
  mostActiveMonth?: string;
  mostActiveMonthViews?: number;
  sharerPercentile?: number;
  viewingLocations?: string[];
}

export default function ContactThankYouEmail({
  year,
  minutesSpentOnDocs,
  uploadedDocuments,
  sharedLinks,
  receivedViews,
  topDocumentName,
  topDocumentViews,
  mostActiveMonth,
  mostActiveMonthViews,
  sharerPercentile,
  viewingLocations = [],
}: ContactThankYouEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>See your stats from 2024</Preview>
      <Tailwind>
        <Body className="bg-white font-sans">
          <Container className="mx-auto w-full max-w-[600px] p-0">
            <Section className="p-8 text-center">
              <Text className="mx-0 mt-4 mb-8 p-0 text-center text-2xl font-normal">
                <span className="font-bold tracking-tighter">Draco Do</span>
              </Text>
              <Text className="text-sm font-normal tracking-wider uppercase">
                {year} in review
              </Text>
              <Heading className="my-4 text-4xl leading-tight font-medium">
                Thank you for contacting me
              </Heading>
              <Text className="mb-8 text-lg leading-8">
                I'll get back to you as soon as possible.
              </Text>
              <Link
                href="https://www.papermark.com"
                className="inline-flex items-center rounded-full bg-gray-900 px-12 py-4 text-center text-sm font-bold text-white no-underline"
              >
                Share your stats
              </Link>
            </Section>

            {/* Footer */}
            <Section className="text-center">
              <table className="w-full">
                <tr className="w-full">
                  <td align="center">
                    <Img
                      alt="React Email logo"
                      height="42"
                      src="https://react.email/static/logo-without-background.png"
                      width="42"
                    />
                  </td>
                </tr>
                <tr className="w-full">
                  <td align="center">
                    <Text className="my-[8px] text-[16px] leading-[24px] font-semibold text-gray-900">
                      Draco Do
                    </Text>
                    <Text className="mt-[4px] mb-0 text-[16px] leading-[24px] text-gray-500">
                      Frontend Developer
                    </Text>
                  </td>
                </tr>

                <tr>
                  <td align="center">
                    <Row className="table-cell h-[44px] w-[56px] align-bottom">
                      <Column className="pr-[8px]">
                        <Link href="#">
                          <Img
                            alt="Facebook"
                            height="36"
                            src="https://react.email/static/facebook-logo.png"
                            width="36"
                          />
                        </Link>
                      </Column>
                      <Column className="pr-[8px]">
                        <Link href="#">
                          <Img
                            alt="X"
                            height="36"
                            src="https://react.email/static/x-logo.png"
                            width="36"
                          />
                        </Link>
                      </Column>
                      <Column>
                        <Link href="#">
                          <Img
                            alt="Instagram"
                            height="36"
                            src="https://react.email/static/instagram-logo.png"
                            width="36"
                          />
                        </Link>
                      </Column>
                    </Row>
                  </td>
                </tr>
                <tr>
                  <td align="center">
                    <Text className="my-[8px] text-[16px] leading-[24px] font-semibold text-gray-500">
                      Ho Chi Minh City, Vietnam
                    </Text>
                    <Text className="mt-[4px] mb-0 text-[16px] leading-[24px] font-semibold text-gray-500">
                      badat336@gmail.com
                    </Text>
                  </td>
                </tr>
              </table>
            </Section>

            {/* <Section className="my-6 rounded-2xl bg-[#fb7a00]/10 bg-[radial-gradient(circle_at_bottom_right,#fb7a00_0%,transparent_60%)] p-8 text-center">
              <Heading className="m-0 text-3xl font-medium text-[#a63b00]">
                Viewers spent
              </Heading>
              <Text className="my-4 text-7xl leading-none font-bold text-gray-900">
                {minutesSpentOnDocs}
              </Text>
              <Text className="mb-4 text-3xl font-medium text-gray-900">
                minutes on your documents
              </Text>
              <Text className="text-sm leading-5 text-gray-900">
                That&apos;s a lot of engagement! Your documents are resonating
                with your visitors.
              </Text>

              <Hr className="mt-6" style={{ borderColor: "#fb7a00" }} />
              <Heading className="pt-5 text-xs font-medium tracking-wider text-gray-900 uppercase">
                Your activity
              </Heading>
              <Row className="mt-5">
                <Column className="w-1/3 text-center">
                  <Text className="text-sm font-medium text-[#a63b00]">
                    You uploaded
                  </Text>
                  <Text className="my-1 text-4xl font-bold text-gray-900">
                    {uploadedDocuments}
                  </Text>
                  <Text className="text-2xl text-gray-900">documents</Text>
                </Column>
                <Column className="w-1/3 text-center">
                  <Text className="text-sm font-medium text-[#a63b00]">
                    You shared
                  </Text>
                  <Text className="my-1 text-4xl font-bold text-gray-900">
                    {sharedLinks}
                  </Text>
                  <Text className="text-2xl text-gray-900">links</Text>
                </Column>
                <Column className="w-1/3 text-center">
                  <Text className="text-sm font-medium text-[#a63b00]">
                    You received
                  </Text>
                  <Text className="my-1 text-4xl font-bold text-gray-900">
                    {receivedViews}
                  </Text>
                  <Text className="text-2xl text-gray-900">views</Text>
                </Column>
              </Row>
            </Section>

            <Section className="my-6 rounded-2xl bg-[#4b5563]/10 bg-[radial-gradient(circle_at_bottom_right,#4b5563_0%,transparent_60%)] p-8 text-center">
              <Heading className="m-0 text-3xl font-medium text-gray-800">
                Your top document
              </Heading>
              <Text className="my-4 text-2xl leading-none font-bold text-gray-900">
                &quot;{topDocumentName}&quot;
              </Text>
              <Text className="mb-4 text-5xl font-medium text-gray-900">
                {topDocumentViews} views
              </Text>
              <Text className="text-sm leading-5 text-gray-900">
                This document really caught your visitor&apos;s attention!
              </Text>
            </Section>

            <Section className="my-6 rounded-2xl bg-[#e4c5a0]/10 bg-[radial-gradient(circle_at_bottom_right,#e4c5a0_0%,transparent_60%)] p-8 text-center">
              <Heading className="m-0 text-3xl font-medium text-[#9c7b4a]">
                Your most active month
              </Heading>
              <Text className="my-4 text-5xl leading-none font-bold text-gray-900">
                {mostActiveMonth}
              </Text>
              <Text className="mb-4 text-3xl font-medium text-gray-900">
                with {mostActiveMonthViews} views
              </Text>
              <Text className="text-sm leading-5 text-gray-900">
                {mostActiveMonth} was your busiest month. What did you share
                that got so much attention?
              </Text>

              <Hr className="mt-6" style={{ borderColor: "#e4c5a0" }} />
              <Heading className="pt-5 text-xs font-medium tracking-wider text-gray-900 uppercase">
                You&apos;re in the top
              </Heading>
              <Text className="my-4 text-7xl leading-none font-bold text-gray-900">
                {sharerPercentile}%
              </Text>
              <Text className="mb-4 text-xl font-medium text-gray-900">
                of sharers on Papermark
              </Text>
              <Text className="text-sm leading-5 text-gray-900">
                You&apos;re one of our most active users. Thank you for sharing
                with Papermark!
              </Text>
            </Section>

            <Section className="my-6 rounded-2xl bg-[#10b981]/10 bg-[radial-gradient(circle_at_bottom_right,#10b981_0%,transparent_60%)] p-8 text-center">
              <Heading className="m-0 text-3xl font-medium text-[#065f46]">
                Your documents were viewed from
              </Heading>
              <Row className="mt-4">
                <Column>
                  {viewingLocations.map((location, index) => (
                    <Text
                      key={index}
                      className="rounded-full bg-[#10b981] px-3 py-1 text-sm font-medium text-white"
                      style={{
                        margin: "4px 4px",
                        display: "inline-block",
                      }}
                    >
                      {location}
                    </Text>
                  ))}
                </Column>
              </Row>
              <Text className="mt-4 text-sm leading-5 text-[#065f46]">
                Your documents get attention from all over the world!
              </Text>
            </Section>

            <Section className="pb-6 text-center">
              <Text className="text-xl leading-8 text-gray-900">
                We&apos;re excited to support you next year! <br />
                Happy Holidays from the Papermark team :)
              </Text>
              <Link
                href="https://www.papermark.com"
                className="mt-4 inline-flex items-center rounded-full bg-gray-900 px-12 py-4 text-center text-sm font-bold text-white no-underline"
              >
                Share your stats
              </Link>
              <Link
                href="https://www.papermark.com"
                className="mt-4 block items-center text-center text-sm font-bold text-gray-900 no-underline"
              >
                Go to your dashboard
              </Link>
            </Section> */}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}

ContactThankYouEmail.PreviewProps = {
  year: 2024,
  minutesSpentOnDocs: 1234,
  uploadedDocuments: 25,
  sharedLinks: 50,
  receivedViews: 500,
  topDocumentName: "Q4 Financial Report",
  topDocumentViews: 150,
  mostActiveMonth: "September",
  mostActiveMonthViews: 200,
  sharerPercentile: 95,
  viewingLocations: ["United States", "United Kingdom", "Germany", "Japan"],
} satisfies ContactThankYouEmailProps;
