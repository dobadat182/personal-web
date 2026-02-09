import Section from "@/components/layouts/Section";
import Container from "@/components/layouts/Container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field";
import {
  Select,
  SelectGroup,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";

const Contact = () => {
  return (
    <Section>
      <Container className="grid items-start gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="space-y-4">
          <p className="text-muted-foreground text-xs font-medium tracking-[0.28em] uppercase sm:text-[0.7rem]">
            Contact
          </p>
          <h2>Let&apos;s build something together</h2>
          <p className="text-muted-foreground max-w-xl text-sm sm:text-base md:text-lg">
            Tell me about your idea, timeline, and goals. I&apos;ll review your
            message and get back to you with next steps and a realistic plan.
          </p>
        </div>

        <div className="bg-card rounded-2xl border border-slate-200 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.08)] dark:border-slate-700 dark:bg-slate-900/40">
          <form className="space-y-4">
            <FieldSet>
              <FieldGroup>
                <div className="grid grid-cols-2 gap-4">
                  <Field>
                    <FieldLabel htmlFor="username">Your Name</FieldLabel>
                    <Input id="username" type="text" placeholder="John Doe" />
                  </Field>

                  <Field>
                    <FieldLabel htmlFor="email">Email</FieldLabel>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                    />
                  </Field>
                </div>

                <Field>
                  <FieldLabel>Department</FieldLabel>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose department" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="support">
                          Customer Support
                        </SelectItem>
                        <SelectItem value="hr">Human Resources</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="operations">Operations</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </Field>

                <Field>
                  <FieldLabel>Project details</FieldLabel>
                  <Textarea
                    rows={4}
                    placeholder="Share a bit about the problem, your users, and any deadlines."
                  />
                </Field>
              </FieldGroup>
            </FieldSet>

            <div className="flex flex-wrap items-center justify-between gap-4">
              <Button type="submit" size="lg">
                Send message
              </Button>
              <p className="text-muted-foreground text-xs sm:text-sm">
                I usually respond within 1–2 business days.
              </p>
            </div>
          </form>
        </div>
      </Container>
    </Section>
  );
};

export default Contact;
