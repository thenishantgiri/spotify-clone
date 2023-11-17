import {
  ButtonGroup,
  Box,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderTrack,
  RangeSliderThumb,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react";
import ReactHowler from "react-howler";
import { useEffect, useRef, useState } from "react";
import {
  PiShuffle,
  PiSkipBackFill,
  PiSkipForwardFill,
  PiPlayCircleFill,
  PiPauseCircleFill,
  PiRepeatFill,
} from "react-icons/pi";
import { useStoreActions } from "easy-peasy";

const Player = () => {
  return (
    <Box>
      <Box>{/* <ReactHowler /> */}</Box>
      <Center>
        <ButtonGroup>
          {/* Shuffle */}
          <IconButton
            outline="none"
            variant="link"
            aria-label="shuffle"
            fontSize="24px"
            color="white"
            icon={<PiShuffle />}
          />
          {/* Previous */}
          <IconButton
            outline="none"
            variant="link"
            aria-label="previous"
            fontSize="24px"
            color="white"
            icon={<PiSkipBackFill />}
          />
          {/* Play */}
          <IconButton
            outline="none"
            variant="link"
            aria-label="play"
            fontSize="40px"
            color="white"
            icon={<PiPlayCircleFill />}
          />
          {/* Pause */}
          <IconButton
            outline="none"
            variant="link"
            aria-label="pause"
            fontSize="40px"
            color="white"
            icon={<PiPauseCircleFill />}
          />
          {/* Next */}
          <IconButton
            outline="none"
            variant="link"
            aria-label="next"
            fontSize="24px"
            color="white"
            icon={<PiSkipForwardFill />}
          />
          {/* Repeat */}
          <IconButton
            outline="none"
            variant="link"
            aria-label="repeat"
            fontSize="24px"
            color="white"
            icon={<PiRepeatFill />}
          />
        </ButtonGroup>
      </Center>
    </Box>
  );
};

export default Player;
