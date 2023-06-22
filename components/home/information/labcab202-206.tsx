import { Text, Container, rem } from "@mantine/core";
import { Button, Modal, Group } from "@mantine/core";
import { Carousel, Embla, useAnimationOffsetEffect } from "@mantine/carousel";
import { FC, useState } from "react";
import { useStyles } from "../../../styles/labcab.styles";
import Image from "next/image";
export interface CustomSlidesProps {
  id: number;
  slideTitle: string;
  slideDescription: string;
  slideImgUrl: string;
}
export interface FeatureImage {
  id: number;
  image: string;
  title: React.ReactNode;
  description: React.ReactNode;
  slides: CustomSlidesProps[];
}
export interface FeaturesImagesProps {
  data: FeatureImage[];
}
export const FeaturesImages: FC<FeaturesImagesProps> = ({ data }) => {
  const { classes } = useStyles();
  const TRANSITION_DURATION = 200;
  const [opened, setOpened] = useState(false);
  const [embla, setEmbla] = useState<Embla | null>(null);
  useAnimationOffsetEffect(embla, TRANSITION_DURATION);

  return (
    <>
      {data.map((item) => (
        <Container size={800} className={classes.wrapper} key={item.id}>
          <div className={classes.item}>
            <Group position="center">
              <Button
                onClick={() => setOpened(true)}
                className={classes.ButtonImage}
                variant="outline"
              >
                <Image
                  className={classes.Image}
                  priority
                  src={item.image}
                  width={120}
                  height={120}
                  alt="image"
                />
              </Button>
            </Group>

            <Modal
              opened={opened}
              size={600}
              padding={0}
              transitionProps={{ duration: TRANSITION_DURATION }}
              withCloseButton={false}
              onClose={() => setOpened(false)}
            >
              <Carousel loop getEmblaApi={setEmbla} maw={600}>
                {item.slides.map((slide) => (
                  <Carousel.Slide key={slide.id}>
                    <Text className="text-center">{slide.slideTitle}</Text>
                    
                      <Image
                        className={classes.slide}
                        priority
                        src= {slide.slideImgUrl}
                        width={1000}
                        height={1000}
                        alt="image"
                      />
                    
                    <Text className="text-center">
                      {slide.slideDescription}
                    </Text>
                  </Carousel.Slide>
                ))}
              </Carousel>
            </Modal>
            <div>
              <Text fw={350} fz="lg" className={classes.itemTitle}>
                {item.title}
              </Text>
              <Text c="dimmed">{item.description}</Text>
            </div>
          </div>
        </Container>
      ))}
    </>
  );
};
