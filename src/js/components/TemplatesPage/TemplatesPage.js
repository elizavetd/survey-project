import React from 'react'

import SearchBar from '../SearchBar'
import TemplatePreview from './TemplatePreview'

export default class TemplatesPage extends React.Component {
  render() {
    return (
        <div className="content">
		<section className="templates">
            <div className="my-surveys">
			<SearchBar 
                placeholder="Найти шаблон" 
                link="/new-survey"
                caption="Новый шаблон"
            />
            </div>
			<div className="list">
                <TemplatePreview
                    iconType = "fa fa-camera-retro"
                    title = "Шаблон 1"
                    description = "Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил, что он у себя в постели превратился в страшное насекомое. Лежа на панцирнотвердой спине, он видел, стоило ему приподнять голову, свой коричневый, выпуклый, разделенный дугообразными чешуйками живот, на верхушке которого еле держалось готовое вот-вот окончательно сползти одеяло."
                    questionsCount = {12}
                    pageCount = {3}
                />
                <TemplatePreview
                    iconType = "fa fa-coffee"
                    title = "Шаблон 2"
                    description = "Его многочисленные, убого тонкие по сравнению с остальным телом ножки беспомощно копошились у него перед глазами. «Что со мной случилось?» – подумал он. Это не было сном. Его комната, настоящая, разве что слишком маленькая, но обычная комната, мирно покоилась в своих четырех хорошо знакомых стенах."
                    questionsCount = {19}
                    pageCount = {6}
                />
                <TemplatePreview
                    iconType = "fa fa-music"
                    title = "Шаблон 3"
                    description = "Над столом, где были разложены распакованные образцы сукон – Замза был коммивояжером, – висел портрет, который он недавно вырезал из иллюстрированного журнала и вставил в красивую золоченую рамку."
                    questionsCount = {16}
                    pageCount = {4}
                />
				<TemplatePreview
                    iconType = "fa fa-film"
                    title = "Шаблон 4"
                    description = "На портрете была изображена дама в меховой шляпе и боа, она сидела очень прямо и протягивала зрителю тяжелую меховую	муфту, в которой целиком исчезала ее рука. Затем взгляд Грегора устремился в окно, и пасмурная погода – слышно было, как по жести подоконника стучат капли дождя – привела его и вовсе в грустное настроение."
                    questionsCount = {23}
                    pageCount = {5}
                />
                <TemplatePreview
                    iconType = "fa fa-suitcase"
                    title = "Шаблон 5"
                    description = "«Хорошо бы еще немного поспать и забыть всю эту чепуху», – подумал он, но это было совершенно неосуществимо, он привык спать на правом боку, а в теперешнем своем состоянии он никак не мог принять этого положения."
                    questionsCount = {10}
                    pageCount = {2}
                />
			</div>
		</section>
	</div>
    );
  }
}
