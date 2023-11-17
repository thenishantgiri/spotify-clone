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

      {/* Seek Bar */}
      <Box color="gray.600">
        <Flex justify="center" align="center">
          {/* Time Elapsed */}
          <Box width="5%" marginTop="10px">
            <Text fontSize="xs">1:21</Text>
          </Box>

          {/* Seek Bar: Slider */}
          <Box width="90%">
            <RangeSlider
              // eslint-disable-next-line jsx-a11y/aria-proptypes
              aria-label={["min", "max"]}
              step={0.1}
              min={0}
              max={321}
              id="player-range"
            >
              <RangeSliderTrack bg="gray.800">
                <RangeSliderFilledTrack bg="gray.600" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>

          {/* Total Duration */}
          <Box width="5%" textAlign="right" marginTop="10px">
            <Text fontSize="xs">4:30</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Player;
