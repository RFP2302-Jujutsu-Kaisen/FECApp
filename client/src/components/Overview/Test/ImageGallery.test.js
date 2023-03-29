import React from 'react';
import { render, screen, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import ImageGallery from '../ImageGallery/ImageGallery';

import eData from '../exampleData';

const { prod, styles } = eData;
const style = styles.results[2] || {};
const noSaleStyle = styles.results[0] || {};

describe('renders and loads ImageGallery with correct functionality', () => {
  test('renders correct ImageGallery empty div if no style is passed', () => {
    render(<ImageGallery style={{}} />);
    expect(screen.getByText('MainImage')).toBeInTheDocument();
  });

  test('renders correct ImageGallery with main Image and gallery thumbnail list', () => {
    render(<ImageGallery style={style} />);
    expect(screen.getByTestId('imgGalleryId')).toBeInTheDocument();
    expect(screen.getByTestId('mainImageId')).toBeInTheDocument();
    expect(screen.getByTestId('galleryThumbListId')).toBeInTheDocument();
  });

  test('renders correct amount of thumbnails if more than 7 images', () => {
    render(<ImageGallery style={styles.results[6]} />);
    expect(screen.getByTestId('imgGalleryId')).toBeInTheDocument();
    expect(screen.getByTestId('mainImageId')).toBeInTheDocument();
    const thumbList = screen.getByTestId('galleryThumbListId');
    expect(thumbList).toBeInTheDocument();
    const listImages = within(thumbList).getAllByRole('listitem');
    expect(listImages.length).toBe(7);
  });

  test('should let users scroll through thumbnails if more than 7 images', async () => {
    const user = userEvent.setup();
    render(<ImageGallery style={styles.results[6]} />);
    const thumbList = screen.getByTestId('galleryThumbListId');
    const listImages = within(thumbList).getAllByRole('listitem');
    const thumbnail = within(listImages[6]).getByRole('button');
    await user.click(thumbnail);

    const thumbListAfter = screen.getByTestId('galleryThumbListId');
    const listImagesAfter = within(thumbListAfter).getAllByRole('listitem');
    expect(listImagesAfter.length).toBe(7);

    const thumbnailAfter = within(listImagesAfter[6]).getByRole('button');
    await user.click(thumbnailAfter);
    expect(thumbnailAfter.selected).toBe(true);
  });

  test('should allow user to toggle to expanded view and back', async () => {
    const user = userEvent.setup();
    render(<ImageGallery style={style} />);
    const mainImg = screen.getByTestId('imgToggleId');
    await user.click(mainImg);
    expect(screen.getByTestId('expandedId')).toBeInTheDocument();
    const expImgButton = screen.getByTestId('expToggleId');
    await user.click(expImgButton);
    expect(screen.getByTestId('mainImageId')).toBeInTheDocument();
  });

  test('should allow user to toggle to zoomed view from expanded view', async () => {
    const user = userEvent.setup();
    render(<ImageGallery style={style} />);
    const mainImg = screen.getByTestId('imgToggleId');
    await user.click(mainImg);
    expect(screen.getByTestId('expandedId')).toBeInTheDocument();
    await user.click(screen.getByTestId('expToggleZoomId'));
    expect(screen.getByTestId('zoomImgId')).toBeInTheDocument();
    await user.click(screen.getByTestId('zoomImgId'));
    expect(screen.getByTestId('expandedId')).toBeInTheDocument();
  });

  test('should allow user to go to next or prev images by thumbnail', async () => {
    const user = userEvent.setup();
    render(<ImageGallery style={style} />);
    const thumbList = screen.getByTestId('galleryThumbListId');
    const thumbnails = within(thumbList).getAllByRole('listitem');
    const thumbnail = within(thumbnails[2]).getByRole('button'); // input image
    await user.click(thumbnail);
    expect(thumbnail.selected).toBe(true);
  });

  test('should allow user to go to next or prev images in expanded', async () => {
    const user = userEvent.setup();
    render(<ImageGallery style={style} />);
    const mainImg = screen.getByTestId('imgToggleId');

    await user.click(mainImg);
    const expImgDiv = screen.getByTestId('expImgInnerId');
    const buttons = within(expImgDiv).getAllByRole('button');
    expect(buttons.length).toBe(3);
    expect(screen.getByTestId('expRightId')).toBeInTheDocument();

    await user.click(screen.getByTestId('expRightId'));
    expect(screen.getByTestId('expLeftId')).toBeInTheDocument();

    await user.click(screen.getByTestId('expLeftId'));
    expect(within(screen.getByTestId('expImgInnerId')).getAllByRole('button').length).toBe(3);
  });
});
