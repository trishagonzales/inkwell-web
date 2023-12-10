import { Container, Grid, HStack, VStack, styled } from '@styled-system/jsx';
import { Button } from '@ui/primitives/button';
import { Heading, Text } from '@ui/primitives/typography';

export default function Home() {
  return (
    <main>
      <HeroSection>
        <Container>
          <HStack>
            <Heading as='h1' py='10' textStyle='5xl' fontWeight='semibold'>
              Build, Grow and Manage your brand with Inkwell
            </Heading>

            <VStack alignItems='start'>
              <Text mb='6'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus, dolores in laudantium aspernatur, nostrum, inventore ad
                necessitatibus eaque numquam.
              </Text>
              <Button variant='primary' size='lg'>
                Get Started
              </Button>
            </VStack>
          </HStack>
        </Container>
      </HeroSection>

      <section>
        <HStack>
          <VStack>
            <Heading>We provide brilliant ideas and solutions</Heading>
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              quaerat cum eos fugiat dignissimos perspiciatis labore at
              repellat.
            </Text>
          </VStack>

          <styled.ul>
            <styled.li>Great experience</styled.li>
            <styled.li>Effective quality strategy</styled.li>
          </styled.ul>
        </HStack>
      </section>
    </main>
  );
}

const HeroSection = styled('section');
