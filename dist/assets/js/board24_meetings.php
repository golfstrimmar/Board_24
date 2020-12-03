<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Board24");
CJSCore::Init(array('jquery'));
?>
<link href="assets/css/app.css" rel="stylesheet">
<div class="board24_wrapper">
  <main class="board24_page">
    <section class="board24_home">
      <div class="board24_home__body">
        <div class="board24_container">
          <section
            class="board24_middle board24_meet board24_middle-meet-1 board24_middle-meetings"
          >
            <div class="board24_meet__body">
              <div class="board24_meet__nav board24_meet-nav board24_jucb">
                <div
                  class="board24_meet-nav__body board24_flex board24_alic border"
                >
                  <h2>Заседания</h2>
                  <form>
                    <div class="board24_bot board24_bot_data">
                      <div class="board24_ts-7">
                        Дата<span
                          class="board24_form-span icon-arrow_drop_down"
                        ></span>
                      </div>
                      <div
                        class="board24_hidden board24_inter-forma board24_flex"
                      >
                        <div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="radio"
                            name="data-choice"
                            value="Дата 1"
                            id="yes5"
                          /><label for="yes5">Текущая неделя</label>
                        </div>
                        <div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="radio"
                            name="data-choice"
                            value="Дата 2"
                            id="yes10"
                          /><label for="yes10">Месяц</label>
                        </div>
                        <div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="radio"
                            name="data-choice"
                            value="Дата 3"
                            id="yes20"
                          /><label for="yes20">Год</label>
                        </div>
                        <div
                          class="board24_flex board24_inter-forma__item board24_inter-forma__item_last"
                        >
                          <input
                            class="custom-checkbox"
                            type="radio"
                            name="data-choice"
                            value="Дата 4"
                            id="yes30"
                          /><label for="yes30"></label
                          ><input class="board24_inter-forma__item_cube" /><img
                            src="assets/img/inter/schedule.svg"
                            alt="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div class="board24_bot board24_bot_data">
                      <div class="board24_ts-7">
                        Стадия<span
                          class="board24_form-span icon-arrow_drop_down"
                        ></span>
                      </div>
                      <div
                        class="board24_hidden board24_inter-forma board24_flex"
                      >
                        <div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="radio"
                            name="stage-choice"
                            value="Дата 1"
                            id="yes6"
                          /><label for="yes6">Подготовка</label>
                        </div>
                        <div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="radio"
                            name="stage-choice"
                            value="Дата 2"
                            id="yes11"
                          /><label for="yes11">Проведение</label>
                        </div>
                        <div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="radio"
                            name="stage-choice"
                            value="Дата 3"
                            id="yes21"
                          /><label for="yes21">Завершено</label>
                        </div>
                      </div>
                    </div>
                    <div class="board24_bot board24_bot_data">
                      <div class="board24_ts-7">
                        Участник<span
                          class="board24_form-span icon-arrow_drop_down"
                        ></span>
                      </div>
                      <div
                        class="board24_hidden board24_inter-forma board24_flex"
                      >
                        <div class="board24_flex board24_inter-forma__item">
                          <input
                            class="board24_inter-forma__item_participant"
                          /><span class="icon-Vector"></span>
                        </div>
                        <div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="radio"
                            name="participant-choice"
                            value="Дата 1"
                            id="yes33"
                          /><label for="yes33">Имя Фамилия</label>
                        </div>
                        <div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="radio"
                            name="participant-choice"
                            value="Дата 2"
                            id="yes34"
                          /><label for="yes34">Имя Фамилия</label>
                        </div>
                        <div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="radio"
                            name="participant-choice"
                            value="Дата 2"
                            id="yes35"
                          /><label for="yes35">Имя Фамилия</label>
                        </div>
                        <div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="radio"
                            name="participant-choice"
                            value="Дата 2"
                            id="yes36"
                          /><label for="yes36">Имя Фамилия</label>
                        </div>
                        <div class="board24_flex board24_inter-forma__item">
                          <div class="board24_item-drop__title">
                            Нeдавниe<span class="icon-arrow_drop_down"></span>
                          </div>
                        </div>
                        <div class="board24_item-drop">
                          <div class="board24_flex board24_inter-forma__item">
                            <input
                              class="custom-checkbox"
                              type="radio"
                              name="participant-choice"
                              value="Дата 2"
                              id="yes37"
                            /><label for="yes37">Имя Фамилия</label>
                          </div>
                          <div class="board24_flex board24_inter-forma__item">
                            <input
                              class="custom-checkbox"
                              type="radio"
                              name="participant-choice"
                              value="Дата 2"
                              id="yes38"
                            /><label for="yes38">Имя Фамилия</label>
                          </div>
                          <div class="board24_flex board24_inter-forma__item">
                            <input
                              class="custom-checkbox"
                              type="radio"
                              name="participant-choice"
                              value="Дата 2"
                              id="yes39"
                            /><label for="yes39">Имя Фамилия</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="board24_bot board24_bot_data">
                      <div class="board24_ts-7">
                        Группа<span
                          class="board24_form-span icon-arrow_drop_down"
                        ></span>
                      </div>
                      <div
                        class="board24_hidden board24_inter-forma board24_flex"
                      >
                        <div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="radio"
                            name="group-choice"
                            value="Дата 1"
                            id="yes7"
                          /><label for="yes7">Совет директоров</label>
                        </div>
                        <div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="radio"
                            name="group-choice"
                            value="Дата 2"
                            id="yes12"
                          /><label for="yes12"
                            >Название группы может быть очень длинным...</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="board24_button-empty">
                      <input
                        class="board24_button-empty__link"
                        type="submit"
                        name="submit"
                        value="Найти"
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div class="board24_meet__content board24_meet-content">
                <div class="board24_meet-content__body">
                  <div
                    class="board24_meet-content__line board24_meet-content__line_high meet-content-line"
                  >
                    <div
                      class="meet-content-line__body board24_jucs board24_alic"
                    >
                      <div class="meet-content-line__text board24_ts-22">
                        Список поручений
                      </div>
                      <div class="meet-content-line__text1 board24_ts-39">
                        Задач требующих оперативной реакции
                      </div>
                      <div
                        class="meet-content-line__mark board24_ts-31 board24_point"
                      >
                        23
                      </div>
                    </div>
                  </div>
                  <div class="board24_meet-content__line meet-content-line">
                    <div
                      class="meet-content-line__body board24_jucs board24_alic"
                    >
                      <forma class="board24_inter-forma board24_flex"
                        ><div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="checkbox"
                            name="meetings1"
                            value="1"
                            id="meetings1"
                          /><label
                            class="board24_ts-7-b"
                            for="meetings1"
                          ></label></div
                      ></forma>
                      <div class="meet-content-line__img-high">
                        <span class="icon-meetings-1"
                          ><span class="path1"></span><span class="path2"></span
                        ></span>
                      </div>
                      <div class="meet-content-line__text board24_ts-24">
                        Название
                      </div>
                      <div class="meet-content-line__type board24_ts-24">
                        Дата
                      </div>
                      <div class="meet-content-line__organ board24_ts-24">
                        Ответственный
                      </div>
                    </div>
                  </div>
                  <div class="board24_meet-content__line meet-content-line">
                    <div
                      class="meet-content-line__body board24_jucs board24_alic"
                    >
                      <forma class="board24_inter-forma board24_flex"
                        ><div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="checkbox"
                            name="meetings2"
                            value="1"
                            id="meetings2"
                          /><label
                            class="board24_ts-7-b"
                            for="meetings2"
                          ></label></div
                      ></forma>
                      <div class="meet-content-line__img">
                        <img
                          class="board24_point"
                          src="assets/img/meetings/v-2.svg"
                          alt="img"
                        />
                      </div>
                      <div class="meet-content-line__text board24_ts-38">
                        Заседание 21 мая
                      </div>
                      <div class="meet-content-line__type board24_ts-12">
                        Dec 14, 2018
                      </div>
                      <a class="board24_avatar-name board24_auto" href="#!"
                        ><img src="assets/img/main/image-1.png" alt="img" />
                        <div
                          class="board24_board24_avatar-name__name board24_alic"
                        >
                          <div class="board24_ts-12">Lindsey Stroud</div>
                        </div></a
                      ><span class="board24_point icon-more"></span>
                    </div>
                  </div>
                  <div class="board24_meet-content__line meet-content-line">
                    <div
                      class="meet-content-line__body board24_jucs board24_alic"
                    >
                      <forma class="board24_inter-forma board24_flex"
                        ><div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="checkbox"
                            name="meetings3"
                            value="1"
                            id="meetings3"
                          /><label
                            class="board24_ts-7-b"
                            for="meetings3"
                          ></label></div
                      ></forma>
                      <div class="meet-content-line__img">
                        <img
                          class="board24_point"
                          src="assets/img/meetings/v-2.svg"
                          alt="img"
                        />
                      </div>
                      <div class="meet-content-line__text board24_ts-38">
                        Заседение совета директоров
                      </div>
                      <div class="meet-content-line__type board24_ts-12">
                        Dec 14, 2018
                      </div>
                      <a class="board24_avatar-name board24_auto" href="#!"
                        ><img src="assets/img/main/image-1.png" alt="img" />
                        <div
                          class="board24_board24_avatar-name__name board24_alic"
                        >
                          <div class="board24_ts-12">Lindsey Stroud</div>
                        </div></a
                      ><span class="board24_point icon-more"></span>
                    </div>
                  </div>
                  <div class="board24_meet-content__line meet-content-line">
                    <div
                      class="meet-content-line__body board24_jucs board24_alic"
                    >
                      <forma class="board24_inter-forma board24_flex"
                        ><div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="checkbox"
                            name="meetings15"
                            value="1"
                            id="meetings15"
                          /><label
                            class="board24_ts-7-b"
                            for="meetings15"
                          ></label></div
                      ></forma>
                      <div class="meet-content-line__img">
                        <img
                          class="board24_point"
                          src="assets/img/meetings/v-2.svg"
                          alt="img"
                        />
                      </div>
                      <div class="meet-content-line__text board24_ts-38">
                        Акционеры крупнейших компаний
                      </div>
                      <div class="meet-content-line__type board24_ts-12">
                        Dec 14, 2018
                      </div>
                      <a class="board24_avatar-name board24_auto" href="#!"
                        ><img src="assets/img/main/image-1.png" alt="img" />
                        <div
                          class="board24_board24_avatar-name__name board24_alic"
                        >
                          <div class="board24_ts-12">Nicci Troiani</div>
                        </div></a
                      ><span class="board24_point icon-more"></span>
                    </div>
                  </div>
                  <div class="board24_meet-content__line meet-content-line">
                    <div
                      class="meet-content-line__body board24_jucs board24_alic"
                    >
                      <forma class="board24_inter-forma board24_flex"
                        ><div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="checkbox"
                            name="meetings4"
                            value="1"
                            id="meetings4"
                          /><label
                            class="board24_ts-7-b"
                            for="meetings4"
                          ></label></div
                      ></forma>
                      <div class="meet-content-line__img">
                        <img
                          class="board24_point"
                          src="assets/img/meetings/v-2.svg"
                          alt="img"
                        />
                      </div>
                      <div class="meet-content-line__text board24_ts-38">
                        Заседение совета директоров
                      </div>
                      <div class="meet-content-line__type board24_ts-12">
                        Dec 14, 2018
                      </div>
                      <a class="board24_avatar-name board24_auto" href="#!"
                        ><img src="assets/img/main/image-1.png" alt="img" />
                        <div
                          class="board24_board24_avatar-name__name board24_alic"
                        >
                          <div class="board24_ts-12">Lindsey Stroud</div>
                        </div></a
                      ><span class="board24_point icon-more"></span>
                    </div>
                  </div>
                  <div class="board24_meet-content__line meet-content-line">
                    <div
                      class="meet-content-line__body board24_jucs board24_alic"
                    >
                      <forma class="board24_inter-forma board24_flex"
                        ><div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="checkbox"
                            name="meetings5"
                            value="1"
                            id="meetings5"
                          /><label
                            class="board24_ts-7-b"
                            for="meetings5"
                          ></label></div
                      ></forma>
                      <div class="meet-content-line__img">
                        <img
                          class="board24_point"
                          src="assets/img/meetings/v-2.svg"
                          alt="img"
                        />
                      </div>
                      <div class="meet-content-line__text board24_ts-38">
                        Заседение совета директоров
                      </div>
                      <div class="meet-content-line__type board24_ts-12">
                        Dec 14, 2018
                      </div>
                      <a class="board24_avatar-name board24_auto" href="#!"
                        ><img src="assets/img/main/image-1.png" alt="img" />
                        <div
                          class="board24_board24_avatar-name__name board24_alic"
                        >
                          <div class="board24_ts-12">Nicci Troiani</div>
                        </div></a
                      ><span class="board24_point icon-more"></span>
                    </div>
                  </div>
                  <div class="board24_meet-content__line meet-content-line">
                    <div
                      class="meet-content-line__body board24_jucs board24_alic"
                    >
                      <forma class="board24_inter-forma board24_flex"
                        ><div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="checkbox"
                            name="meetings6"
                            value="1"
                            id="meetings6"
                          /><label
                            class="board24_ts-7-b"
                            for="meetings6"
                          ></label></div
                      ></forma>
                      <div class="meet-content-line__img">
                        <img
                          class="board24_point"
                          src="assets/img/meetings/v-2.svg"
                          alt="img"
                        />
                      </div>
                      <div class="meet-content-line__text board24_ts-38">
                        Акционеры крупнейших компаний
                      </div>
                      <div class="meet-content-line__type board24_ts-12">
                        Dec 14, 2018
                      </div>
                      <a class="board24_avatar-name board24_auto" href="#!"
                        ><img src="assets/img/main/image-1.png" alt="img" />
                        <div
                          class="board24_board24_avatar-name__name board24_alic"
                        >
                          <div class="board24_ts-12">Lindsey Stroud</div>
                        </div></a
                      ><span class="board24_point icon-more"></span>
                    </div>
                  </div>
                  <div class="board24_meet-content__line meet-content-line">
                    <div
                      class="meet-content-line__body board24_jucs board24_alic"
                    >
                      <forma class="board24_inter-forma board24_flex"
                        ><div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="checkbox"
                            name="meetings7"
                            value="1"
                            id="meetings7"
                          /><label
                            class="board24_ts-7-b"
                            for="meetings7"
                          ></label></div
                      ></forma>
                      <div class="meet-content-line__img">
                        <img
                          class="board24_point"
                          src="assets/img/meetings/v-2.svg"
                          alt="img"
                        />
                      </div>
                      <div class="meet-content-line__text board24_ts-38">
                        Заседение совета директоров
                      </div>
                      <div class="meet-content-line__type board24_ts-12">
                        Dec 14, 2018
                      </div>
                      <a class="board24_avatar-name board24_auto" href="#!"
                        ><img src="assets/img/main/image-1.png" alt="img" />
                        <div
                          class="board24_board24_avatar-name__name board24_alic"
                        >
                          <div class="board24_ts-12">Nicci Troiani</div>
                        </div></a
                      ><span class="board24_point icon-more"></span>
                    </div>
                  </div>
                  <div class="board24_meet-content__line meet-content-line">
                    <div
                      class="meet-content-line__body board24_jucs board24_alic"
                    >
                      <forma class="board24_inter-forma board24_flex"
                        ><div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="checkbox"
                            name="meetings8"
                            value="1"
                            id="meetings8"
                          /><label
                            class="board24_ts-7-b"
                            for="meetings8"
                          ></label></div
                      ></forma>
                      <div class="meet-content-line__img">
                        <img
                          class="board24_point"
                          src="assets/img/meetings/v-2.svg"
                          alt="img"
                        />
                      </div>
                      <div class="meet-content-line__text board24_ts-38">
                        Заседение совета директоров
                      </div>
                      <div class="meet-content-line__type board24_ts-12">
                        Dec 14, 2018
                      </div>
                      <a class="board24_avatar-name board24_auto" href="#!"
                        ><img src="assets/img/main/image-1.png" alt="img" />
                        <div
                          class="board24_board24_avatar-name__name board24_alic"
                        >
                          <div class="board24_ts-12">Nicci Troiani</div>
                        </div></a
                      ><span class="board24_point icon-more"></span>
                    </div>
                  </div>
                  <div class="board24_meet-content__line meet-content-line">
                    <div
                      class="meet-content-line__body board24_jucs board24_alic"
                    >
                      <forma class="board24_inter-forma board24_flex"
                        ><div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="checkbox"
                            name="meetings9"
                            value="1"
                            id="meetings9"
                          /><label
                            class="board24_ts-7-b"
                            for="meetings9"
                          ></label></div
                      ></forma>
                      <div class="meet-content-line__img">
                        <img
                          class="board24_point"
                          src="assets/img/meetings/v-2.svg"
                          alt="img"
                        />
                      </div>
                      <div class="meet-content-line__text board24_ts-38">
                        Заседение совета директоров
                      </div>
                      <div class="meet-content-line__type board24_ts-12">
                        Dec 14, 2018
                      </div>
                      <a class="board24_avatar-name board24_auto" href="#!"
                        ><img src="assets/img/main/image-1.png" alt="img" />
                        <div
                          class="board24_board24_avatar-name__name board24_alic"
                        >
                          <div class="board24_ts-12">Nicci Troiani</div>
                        </div></a
                      ><span class="board24_point icon-more"></span>
                    </div>
                  </div>
                  <div class="board24_meet-content__line meet-content-line">
                    <div
                      class="meet-content-line__body board24_jucs board24_alic"
                    >
                      <forma class="board24_inter-forma board24_flex"
                        ><div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="checkbox"
                            name="meetings10"
                            value="1"
                            id="meetings10"
                          /><label
                            class="board24_ts-7-b"
                            for="meetings10"
                          ></label></div
                      ></forma>
                      <div class="meet-content-line__img">
                        <img
                          class="board24_point"
                          src="assets/img/meetings/v-2.svg"
                          alt="img"
                        />
                      </div>
                      <div class="meet-content-line__text board24_ts-38">
                        Заседение совета директоров
                      </div>
                      <div class="meet-content-line__type board24_ts-12">
                        Dec 14, 2018
                      </div>
                      <a class="board24_avatar-name board24_auto" href="#!"
                        ><img src="assets/img/main/image-1.png" alt="img" />
                        <div
                          class="board24_board24_avatar-name__name board24_alic"
                        >
                          <div class="board24_ts-12">Nicci Troiani</div>
                        </div></a
                      ><span class="board24_point icon-more"></span>
                    </div>
                  </div>
                  <div class="board24_meet-content__line meet-content-line">
                    <div
                      class="meet-content-line__body board24_jucs board24_alic"
                    >
                      <forma class="board24_inter-forma board24_flex"
                        ><div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="checkbox"
                            name="meetings11"
                            value="1"
                            id="meetings11"
                          /><label
                            class="board24_ts-7-b"
                            for="meetings11"
                          ></label></div
                      ></forma>
                      <div class="meet-content-line__img">
                        <img
                          class="board24_point"
                          src="assets/img/meetings/v-2.svg"
                          alt="img"
                        />
                      </div>
                      <div class="meet-content-line__text board24_ts-38">
                        Заседение совета директоров
                      </div>
                      <div class="meet-content-line__type board24_ts-12">
                        Dec 14, 2018
                      </div>
                      <a class="board24_avatar-name board24_auto" href="#!"
                        ><img src="assets/img/main/image-1.png" alt="img" />
                        <div
                          class="board24_board24_avatar-name__name board24_alic"
                        >
                          <div class="board24_ts-12">Nicci Troiani</div>
                        </div></a
                      ><span class="board24_point icon-more"></span>
                    </div>
                  </div>
                  <div class="board24_meet-content__line meet-content-line">
                    <div
                      class="meet-content-line__body board24_jucs board24_alic"
                    >
                      <forma class="board24_inter-forma board24_flex"
                        ><div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="checkbox"
                            name="meetings12"
                            value="1"
                            id="meetings12"
                          /><label
                            class="board24_ts-7-b"
                            for="meetings12"
                          ></label></div
                      ></forma>
                      <div class="meet-content-line__img">
                        <img
                          class="board24_point"
                          src="assets/img/meetings/v-2.svg"
                          alt="img"
                        />
                      </div>
                      <div class="meet-content-line__text board24_ts-38">
                        Заседение совета директоров
                      </div>
                      <div class="meet-content-line__type board24_ts-12">
                        Dec 14, 2018
                      </div>
                      <a class="board24_avatar-name board24_auto" href="#!"
                        ><img src="assets/img/main/image-1.png" alt="img" />
                        <div
                          class="board24_board24_avatar-name__name board24_alic"
                        >
                          <div class="board24_ts-12">Nicci Troiani</div>
                        </div></a
                      ><span class="board24_point icon-more"></span>
                    </div>
                  </div>
                  <div class="board24_meet-content__line meet-content-line">
                    <div
                      class="meet-content-line__body board24_jucs board24_alic"
                    >
                      <forma class="board24_inter-forma board24_flex"
                        ><div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="checkbox"
                            name="meetings13"
                            value="1"
                            id="meetings13"
                          /><label
                            class="board24_ts-7-b"
                            for="meetings13"
                          ></label></div
                      ></forma>
                      <div class="meet-content-line__img">
                        <img
                          class="board24_point"
                          src="assets/img/meetings/v-2.svg"
                          alt="img"
                        />
                      </div>
                      <div class="meet-content-line__text board24_ts-38">
                        Заседение совета директоров
                      </div>
                      <div class="meet-content-line__type board24_ts-12">
                        Dec 14, 2018
                      </div>
                      <a class="board24_avatar-name board24_auto" href="#!"
                        ><img src="assets/img/main/image-1.png" alt="img" />
                        <div
                          class="board24_board24_avatar-name__name board24_alic"
                        >
                          <div class="board24_ts-12">Nicci Troiani</div>
                        </div></a
                      ><span class="board24_point icon-more"></span>
                    </div>
                  </div>
                  <div class="board24_meet-content__line meet-content-line">
                    <div
                      class="meet-content-line__body board24_jucs board24_alic"
                    >
                      <forma class="board24_inter-forma board24_flex"
                        ><div class="board24_flex board24_inter-forma__item">
                          <input
                            class="custom-checkbox"
                            type="checkbox"
                            name="meetings14"
                            value="1"
                            id="meetings14"
                          /><label
                            class="board24_ts-7-b"
                            for="meetings14"
                          ></label></div
                      ></forma>
                      <div class="meet-content-line__img">
                        <img
                          class="board24_point"
                          src="assets/img/meetings/v-2.svg"
                          alt="img"
                        />
                      </div>
                      <div class="meet-content-line__text board24_ts-38">
                        Заседение совета директоров
                      </div>
                      <div class="meet-content-line__type board24_ts-12">
                        Dec 14, 2018
                      </div>
                      <a class="board24_avatar-name board24_auto" href="#!"
                        ><img src="assets/img/main/image-1.png" alt="img" />
                        <div
                          class="board24_board24_avatar-name__name board24_alic"
                        >
                          <div class="board24_ts-12">Nicci Troiani</div>
                        </div></a
                      ><span class="board24_point icon-more"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div class="meet-content-line__tab">
            <div class="board24_ts-47">
              Skype<span class="board24_point icon-more"></span>
            </div>
            <div class="board24_ts-35">December 22, 2018</div>
            <div class="board24_ts-38 board24_m3">
              Заседение директоров№123 456 789...
            </div>
            <a class="board24_avatar-name board24_alic board24_auto" href="#!"
              ><img src="assets/img/main/image-1.png" alt="img" />
              <div class="board24_board24_avatar-name__name">
                <span class="board24_ts-12">George Fields</span><br /><span
                  class="board24_ts-41"
                  >Совет директоров</span
                >
              </div></a
            >
            <div class="meet-content-line__tab-sub">
              <div class="board24_ts-37 board24_point">
                <span class="icon-Vector-5"></span><span>Завершить задачу</span>
              </div>
              <div class="board24_ts-37 board24_point">
                <span class="icon-Vector-5"></span
                ><span>Начать выполнение задачи</span>
              </div>
              <div class="board24_ts-37 board24_point">
                <span class="icon-Vector-5"></span><span>Удалить задачу</span>
              </div>
              <span class="board24_point icon-more"></span>
            </div>
          </div>
          <section
            class="board24_person board24_person-meet board24_person-meet-meeting"
            id="person"
          >
            <div class="board24_person__body">
              <div class="board24_create-meeting1">
                <div class="board24_button-blue">
                  <a class="board24_button-blue__link" href="#!"
                    >Создать заседание</a
                  >
                </div>
              </div>
              <div
                class="board24_person__cabinet board24_m15 board24_person-cabinet"
              >
                <div class="board24_person-cabinet__body board24_fdc">
                  <div class="board24_ts-34">Список</div>
                  <div class="board24_ts-34">Мой план</div>
                  <div class="board24_ts-34">Гант</div>
                  <div class="board24_m20"></div>
                  <div class="board24_m15"></div>
                  <div class="board24_ts board24_alic">
                    <span>Все</span>
                    <div
                      class="meet-content-line__mark board24_ts-31 board24_point"
                    >
                      704
                    </div>
                  </div>
                  <div class="board24_ts board24_alic">
                    <span>Делаю</span>
                    <div
                      class="meet-content-line__mark board24_ts-31 board24_point"
                    >
                      23
                    </div>
                  </div>
                  <div class="board24_ts board24_alic">
                    <span>Помогаю</span>
                    <div
                      class="meet-content-line__mark board24_ts-31 board24_point"
                    >
                      9
                    </div>
                  </div>
                  <div class="board24_ts board24_alic">
                    <span>Поручил</span>
                  </div>
                  <div class="board24_ts board24_alic">
                    <span>Наблюдаю</span>
                    <div
                      class="meet-content-line__mark board24_ts-31 board24_point"
                    >
                      704
                    </div>
                  </div>
                  <div class="board24_m20"></div>
                  <div class="board24_m10"></div>
                  <div
                    class="board24_person-cabinet__set board24_ts-48 board24_alic"
                  >
                    <span class="icon-meetings-1"
                      ><span class="path1"></span
                      ><span class="path2"></span></span
                    ><span class="board24_point">Настроить меню</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div class="board24_meet__popup" id="board24_meet-popup2">
            <div class="board24_meet__overlay">
              <div class="board24_meet__center board24_jucc board24_center">
                <span class="board24_cross icon-close2"></span>
                <div class="board24_meet__title board24_ts-4">
                  Вы хотите создать заседание самостоятельно, или дать поручение
                  секретарю?
                </div>
                <div class="board24_meet__buttons board24_jucc">
                  <div class="board24_button-empty">
                    <a class="board24_button-empty__link" href="#!"
                      >Создать поручение секретарю</a
                    >
                  </div>
                  <div class="board24_button-blue">
                    <a class="board24_button-blue__link" href="#!"
                      >Собрать заседание самостоятельно</a
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="board24_meet__popup" id="board24_meet-popup1">
            <div class="board24_meet__overlay">
              <section
                class="board24_middle-inter-6 board24_middle-inter-2 board24_inter6 board24_center"
              >
                <span class="board24_cross icon-close2"></span>
                <div class="board24_inter6__header board24_ts-4">
                  Создать заседание
                </div>
                <div class="board24_inter6__inter-plaza1 board24_inter-plaza">
                  <div class="board24_bot board24_meet-up">
                    <div class="board24_bot__text board24_ts-5">
                      Название заседания
                    </div>
                    <input
                      class="board24_ts-6 board24_bot__input"
                      placeholder="Office meet-up"
                    />
                  </div>
                  <hr />
                  <div class="board24_bot board24_meet-up">
                    <div class="board24_bot__text board24_ts-5">Тема</div>
                    <input
                      class="board24_ts-6 board24_bot__input"
                      placeholder="Office meet-upOffice meet-upOffice meet-up"
                    />
                  </div>
                  <hr />
                  <div
                    class="board24_inter-plaza__bots board24-corvet board24-bots"
                  >
                    <div class="board24-corvet__text-area">
                      <div class="board24_bot">
                        <div class="board24_bot__text board24_ts-5">Дата</div>
                        <div class="board24_bot__text-area board24_js-data">
                          <input
                            class="board24_ts board24_bot__input board24_bot__input_data"
                            placeholder="Введите дату"
                          />
                          <div class="board24_bot__in-text board24_ts-5"></div>
                          <img src="assets/img/inter/schedule.svg" alt="img" />
                        </div>
                      </div>
                      <bot></bot>
                      <div class="board24_bot">
                        <div class="board24_bot__text board24_ts-5">Время</div>
                        <div class="board24_bot__text-area board24_js-data">
                          <input
                            class="board24_ts board24_bot__input board24_bot__input_data"
                            placeholder="Укажите время"
                          /><span class="icon-arrow_drop_down"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="board24-corvet board24_m8">
                    <div class="board24-corvet__text board24_ts-5">Тип</div>
                    <div
                      class="board24-corvet__text-area board24-corvet__text-area_select"
                    >
                      <select
                        class="js-example-basic-single"
                        name="BOARD24_TYPE"
                      >
                        <option value="123">Тест</option>
                      </select>
                    </div>
                  </div>
                  <div class="board24-corvet board24_m8">
                    <div class="board24-corvet__text board24_ts-5">
                      Председатель:
                    </div>
                    <div class="board24-corvet__text-area">
                      <a
                        class="board24-corvet__in-text board24_ts board24_alic board24_jucb"
                        href="#!"
                        ><span class="board24_ts-6">Совет директоров</span
                        ><span class="icon-close2"></span
                      ></a>
                    </div>
                  </div>
                  <div class="board24-corvet board24_m8">
                    <div class="board24-corvet__text board24_ts-5">
                      Секретарь:
                    </div>
                    <div class="board24-corvet__text-area">
                      <a
                        class="board24-corvet__in-text board24_ts board24_alic"
                        href="#!"
                        ><span class="board24_ts-29">Добавить</span></a
                      >
                    </div>
                  </div>
                  <div class="board24-corvet board24_m8">
                    <div class="board24-corvet__text board24_ts-5">
                      Участник,без права голоса
                    </div>
                    <div class="board24-corvet__text-area">
                      <a
                        class="board24-corvet__in-text board24_ts board24_alic board24_jucb"
                        href="#!"
                        ><span class="board24_ts-6">Совет директороов</span
                        ><span class="icon-close2"></span
                      ></a>
                    </div>
                  </div>
                  <div class="board24-corvet board24_m8">
                    <div class="board24-corvet__text board24_ts-5">
                      Участник,с правом голоса
                    </div>
                    <div class="board24-corvet__text-area">
                      <a
                        class="board24-corvet__in-text board24_ts board24_alic"
                        href="#!"
                        ><span class="board24_ts-29">Добавить </span
                        ><span class="board24_ts"></span
                      ></a>
                    </div>
                  </div>
                  <div class="board24-corvet board24_m8">
                    <div class="board24-corvet__text board24_ts-5">
                      Коллегиальный орган
                    </div>
                    <div class="board24-corvet__text-area">
                      <a
                        class="board24-corvet__in-text board24_ts board24_alic"
                        href="#!"
                        ><span class="board24_ts-29">Добавить </span
                        ><span class="board24_ts"></span
                      ></a>
                    </div>
                  </div>
                  <div class="board24-corvet board24_m8">
                    <div class="board24-corvet__text board24_ts-5">
                      Место проведения
                    </div>
                    <div class="board24-corvet__text-area">
                      <a
                        class="board24-corvet__in-text board24_ts board24_alic"
                        href="#!"
                        ><span class="board24_ts-29">Добавить </span
                        ><span class="board24_ts"></span
                      ></a>
                    </div>
                  </div>
                  <div class="board24_inter6__title1 board24_ts-5">
                    Описание задачи
                  </div>
                  <div class="board24_inter-plaza__text-area1 board24_area1">
                    <div class="board24_js-data">
                      <textarea
                        class="board24_bot__input board24_bot__input_one board24_ts"
                        type="text"
                        placeholder=" Leave a note here ..."
                      ></textarea>
                      <div class="board24_area1__text board24_ts">
                        <span class="board24_ts">Leave a note here..</span
                        ><span
                          >Lorem ipsum dolor sit, amet consectetur adipisicing
                          Doloremque eligendi quibusdam hic, dolorem, laboriosam
                          vero blanditiis labore ex quo autem, dolores similique
                          sapiente Officia saepe autem delectus
                          perspiciatis!</span
                        >
                      </div>
                    </div>
                    <div class="board24_jucb">
                      <div class="board24_jucb">
                        <a class="board24_area1__img" href="#!"
                          ><img src="assets/img/inter/vt-1.svg" alt="img" /></a
                        ><a class="board24_area1__img" href="#!"
                          ><img src="assets/img/inter/vt-2.svg" alt="img" /></a
                        ><a class="board24_area1__img" href="#!"
                          ><img src="assets/img/inter/vt-3.svg" alt="img"
                        /></a>
                      </div>
                      <div class="board24_flex">
                        <div class="board24_area1__button">
                          <div class="board24_button-color-cub pale-grey">
                            <a href="#!">Отменить</a>
                          </div>
                        </div>
                        <div class="board24_area1__button">
                          <div class="board24_button-color-cub silver">
                            <a href="#!">Сохранить</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="board24_inter6__inter-plaza2 board24_inter-plaza inter6-plaza2"
                >
                  <span class="icon-close2"></span>
                  <div class="inter6-plaza2__corvet board24-corvet">
                    <div class="board24-corvet__text board24_ts-5">
                      Вопрос №1
                    </div>
                    <input
                      class="board24_ts board24_bot__input board24-corvet__text-area"
                      placeholder="Описание вопроса"
                    />
                    <div class="board24-corvet__text-area">
                      <div class="board24_js-data">
                        <a class="board24-corvet__in-text board24_ts" href="#!"
                          ><span class="board24_ts-8">Описание вопроса </span
                          ><span class="board24_ts"
                            ><img
                              src="assets/img/inter/edit.svg"
                              alt="img" /></span
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="inter6-plaza2__corvet board24-corvet board24_m8">
                    <div class="board24-corvet__text board24_ts-5">
                      Докладчик:
                    </div>
                    <div class="board24-corvet__text-area">
                      <a class="board24-corvet__in-text board24_ts" href="#!"
                        ><span class="board24_ts-8"
                          >Константин Константинопольский </span
                        ><span class="board24_ts"></span></a
                      ><a class="board24-corvet-a board24_ts-29" href="#!"
                        >&nbsp + Добавить докладчика </a
                      ><img src="assets/img/inter/edit.svg" alt="img" />
                    </div>
                  </div>
                  <div class="inter6-plaza2__corvet board24-corvet board24_m8">
                    <div class="board24-corvet__text board24_ts-5">
                      Проект решение №1
                    </div>
                    <input
                      class="board24_ts board24_bot__input board24-corvet__text-area"
                      placeholder="Текст описание проект решения"
                    />
                    <div class="board24-corvet__text-area">
                      <div class="board24_js-data">
                        <a class="board24-corvet__in-text board24_ts" href="#!"
                          ><span class="board24_ts-8"
                            >Текст описание проект решения </span
                          ><span class="board24_ts"
                            ><img
                              src="assets/img/inter/edit.svg"
                              alt="img" /></span
                        ></a>
                      </div>
                    </div>
                  </div>
                  <div class="board24_button-empty">
                    <a class="board24_button-empty__link" href="#!"
                      >Добавить проект решения</a
                    >
                  </div>
                </div>
                <div class="board24_inter6__buttons board24_m24 board24_alic">
                  <div class="board24_button-blue">
                    <a class="board24_button-blue__link" href="#!"
                      >Добавить вопрос</a
                    >
                  </div>
                  <div class="board24_button-empty">
                    <a class="board24_button-empty__link" href="#!"
                      >Добавить из засседания</a
                    >
                  </div>
                  <div class="board24_button-empty">
                    <a class="board24_button-empty__link" href="#!"
                      >Добавить из поручения</a
                    >
                  </div>
                </div>
                <div
                  class="board24_inter6__buttons1 board24_inter__buttons board24_jucc board24_m34"
                >
                  <div class="board24_button-empty">
                    <a class="board24_button-empty__link" href="#!">Отменить</a>
                  </div>
                  <div class="board24_button-blue">
                    <a class="board24_button-blue__link" href="#!"
                      >Создать заседание</a
                    >
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="board24_meet__popup" id="board24_meet-popup3">
            <div class="board24_meet__overlay"></div>
            <form
              class="board24_middle-inter-5 board24_middle-inter board24_middle-inter-2 board24_center"
            >
              <span class="board24_cross icon-close2"></span>
              <div
                class="board24_inter__header board24_inter6__header board24_ts-4"
              >
                Новое поручение
              </div>
              <div class="board24_inter__plaza board24_inter-plaza">
                <div class="board24_inter-plaza__header board24_ts-5">
                  Название поручения
                </div>
                <div
                  class="board24_inter-plaza__discription board24_ts-6 board24_jucb"
                >
                  <input
                    class="board24_ts-6 board24_bot__input"
                    placeholder="Поручение №1234567890"
                  /><forma class="board24_inter-forma board24_flex"
                    ><div class="board24_flex board24_inter-forma__item">
                      <input
                        class="custom-checkbox"
                        type="checkbox"
                        name="i6"
                        value="1"
                        id="i6"
                      /><label
                        class="board24_text-small-blue board24_ts-7"
                        for="i6"
                        >Отметить как важное</label
                      >
                    </div></forma
                  >
                </div>
                <hr />
                <div class="board24_inter-plaza__text-area1 board24_area1">
                  <textarea
                    class="board24_area1__input board24_ts"
                    type="text"
                    placeholder=" Leave a note here ..."
                  ></textarea>
                  <div class="board24_js-data">
                    <div class="board24_area1__text">
                      <span class="board24_ts">Leave a note here ... </span
                      ><span class="board24_ts-6"></span>
                    </div>
                  </div>
                  <div class="board24_jucb">
                    <div class="board24_jucb">
                      <a class="board24_area1__img" href="#!"
                        ><img src="assets/img/inter/vt-1.svg" alt="img" /></a
                      ><a class="board24_area1__img" href="#!"
                        ><img src="assets/img/inter/vt-2.svg" alt="img" /></a
                      ><a class="board24_area1__img" href="#!"
                        ><img src="assets/img/inter/vt-3.svg" alt="img"
                      /></a>
                    </div>
                    <div class="board24_flex">
                      <div class="board24_area1__button">
                        <div class="board24_button-color-cub pale-grey">
                          <a href="#!">Отменить</a>
                        </div>
                      </div>
                      <div class="board24_area1__button">
                        <div class="board24_button-color-cub silver">
                          <a href="#!">Сохранить</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="board24-corvet">
                  <div class="board24-corvet__text">Ответственный</div>
                  <input
                    class="board24-corvet__text-area"
                    placeholder="Добавить еще"
                  />
                </div>
                <div class="board24-corvet">
                  <div class="board24-corvet__text">Постановщик</div>
                  <input
                    class="board24-corvet__text-area"
                    placeholder="Добавить еще"
                  />
                </div>
                <div class="board24-corvet">
                  <div class="board24-corvet__text">Соисполнители</div>
                  <input
                    class="board24-corvet__text-area"
                    placeholder="Добавить еще"
                  />
                </div>
                <div class="board24-corvet">
                  <div class="board24-corvet__text">Наблюдатели</div>
                  <input
                    class="board24-corvet__text-area"
                    placeholder="Добавить еще"
                  />
                </div>
                <div class="board24-corvet board24-corvet-bot">
                  <div class="board24-corvet__text">Крайний срок</div>
                  <div class="board24-corvet__text-area">
                    <div class="board24_bot">
                      <div class="board24_bot__area">
                        <input
                          class="board24_ts board24_bot__input"
                          placeholder=""
                        /><img src="assets/img/inter/schedule.svg" alt="img" />
                      </div>
                    </div>
                    <div class="board24_bot">
                      <div class="board24_bot__area">
                        <div class="board24_bot_data">
                          <div class="board24_ts-7">
                            Планирование сроков<span
                              class="board24_form-span icon-arrow_drop_down"
                            ></span>
                          </div>
                          <div
                            class="board24_hidden board24_inter-forma board24_flex"
                          >
                            <div
                              class="board24_flex board24_inter-forma__item board24_inter-forma__item_last"
                            >
                              <div class="board24_inter-forma__title">
                                Начать поручение:
                              </div>
                              <input
                                class="board24_inter-forma__item_cube"
                              /><img
                                src="assets/img/inter/schedule.svg"
                                alt="img"
                              />
                            </div>
                            <div
                              class="board24_flex board24_inter-forma__item board24_inter-forma__item_last"
                            >
                              <div class="board24_inter-forma__title">
                                Длительность:
                              </div>
                              <input class="board24_inter-forma__item_cube" />
                            </div>
                            <div
                              class="board24_flex board24_inter-forma__item board24_inter-forma__item_last"
                            >
                              <div class="board24_inter-forma__title">
                                Завершениe:
                              </div>
                              <input
                                class="board24_inter-forma__item_cube"
                              /><img
                                src="assets/img/inter/schedule.svg"
                                alt="img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="board24_bot">
                      <div class="board24_bot__area">
                        <div class="board24_bot_data">
                          <div class="board24_ts-7">
                            Дополнительно<span
                              class="board24_form-span icon-arrow_drop_down"
                            ></span>
                          </div>
                          <div
                            class="board24_hidden board24_inter-forma board24_flex"
                          >
                            <div class="board24_flex board24_inter-forma__item">
                              <input
                                class="custom-checkbox"
                                type="radio"
                                name="stage-choice1"
                                value="Дата 1"
                                id="stage-choice-1"
                              /><label for="stage-choice-1"
                                >Разрешить ответственному менять сроки
                                поручения&nbsp; <span><i>?</i></span></label
                              >
                            </div>
                            <div class="board24_flex board24_inter-forma__item">
                              <input
                                class="custom-checkbox"
                                type="radio"
                                name="stage-choice1"
                                value="Дата 2"
                                id="stage-choice-2"
                              /><label for="stage-choice-2"
                                >Пропустить выходные и праздничные
                                дни&nbsp;<span><i>?</i></span></label
                              >
                            </div>
                            <div class="board24_flex board24_inter-forma__item">
                              <input
                                class="custom-checkbox"
                                type="radio"
                                name="stage-choice1"
                                value="Дата 3"
                                id="stage-choice-3"
                              /><label for="stage-choice-3"
                                >Принять работу после завершения
                                поручения&nbsp;<span><i>?</i></span></label
                              >
                            </div>
                            <div class="board24_flex board24_inter-forma__item">
                              <input
                                class="custom-checkbox"
                                type="radio"
                                name="stage-choice1"
                                value="Дата 3"
                                id="stage-choice-4"
                              /><label for="stage-choice-4"
                                >Добавить себе в избранное&nbsp;<span
                                  ><i>?</i></span
                                ></label
                              >
                            </div>
                            <div class="board24_flex board24_inter-forma__item">
                              <input
                                class="custom-checkbox"
                                type="radio"
                                name="stage-choice1"
                                value="Дата 3"
                                id="stage-choice-5"
                              /><label for="stage-choice-5"
                                >Добавить в план рабочего дня&nbsp;<span
                                  ><i>?</i></span
                                ></label
                              >
                            </div>
                            <div class="board24_flex board24_inter-forma__item">
                              <input
                                class="custom-checkbox"
                                type="radio"
                                name="stage-choice1"
                                value="Дата 3"
                                id="stage-choice-6"
                              /><label for="stage-choice-6"
                                >Сроки определяются сроками
                                подпоручений&nbsp;<span><i>?</i></span></label
                              >
                            </div>
                            <div class="board24_flex board24_inter-forma__item">
                              <input
                                class="custom-checkbox"
                                type="radio"
                                name="stage-choice1"
                                value="Дата 3"
                                id="stage-choice-7"
                              /><label for="stage-choice-7"
                                >Автоматически завершать поручение при
                                завершении подзадач (и наоборот)&nbsp;<span
                                  ><i>?</i></span
                                ></label
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="board24-corvet board24-corvet-add">
                  <div class="board24-corvet__text-area">
                    <div class="board24-corvet__text">
                      Дополнительно<span
                        class="board24_form-span icon-arrow_drop_down"
                      ></span>
                    </div>
                    <div class="board24-corvet__drop"></div>
                  </div>
                </div>
                <div class="board24_inter__buttons board24_jucs">
                  <forma class="board24_inter-forma board24_flex"
                    ><div class="board24_flex board24_inter-forma__item">
                      <input
                        class="custom-checkbox"
                        type="checkbox"
                        name="i5"
                        value="1"
                        id="i5"
                      /><label class="board24_ts-7-b" for="i5"
                        >Сохранить как шаблон</label
                      >
                    </div></forma
                  >
                  <div class="board24_button-empty">
                    <a class="board24_button-empty__link" href="#!">Отменить</a>
                  </div>
                  <div class="board24_button-blue">
                    <a class="board24_button-blue__link" href="#!"
                      >Поставить поручение</a
                    >
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>
<script src="assets/js/app.js"></script>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
