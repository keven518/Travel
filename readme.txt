2-4 mvp��mvvm���ģʽ
m-v-p
model�����ݲ�
presenter�����ֲ㣬ҵ���߼����Ʋ�
view����ͼ��

2-5 �����
2-6 ʹ�������˼���޸�TodoList
2-7 �򵥵�����䴫ֵ
2-8 ����С��

3-1 Vueʵ��
app.$destroy() ���ٵ����vueʵ����
�����Ժ�˫�����ݰ󶨹����Ѿ�ʧЧ�����¼�������

3-2 vueʵ�����������ڹ���

3-3 vue��ģ���﷨


3-4 �������ԣ�������������
�����������û���ģ� ������ֵû�ı�ʱ��������ֻ����һ�Σ��������¼���

3-5 �������Ե�setter��getter
���¸ı亯������ֵ��set��ִ�У�����������ֵ�仯ʱget��ִ��

3-6 Vue�е���ʽ��
1��:class="{activated: isActivated}"
2��:class="[activated]"

3-7 Vue�е�������Ⱦ
��keyֵ��key��ͬ���Ͳ��Ḵ�ñ��飬����Ḵ��

3-8 Vue�е��б���Ⱦ
vueֻ��push pop shift unshift splice sort reverse�⼸������Ĳ���������ӦʽЧ�������ⲻ����Ӧʽ
templateģ��ռλ��������Ⱦ
���Ըı���������

3-9 Vue�е�set
ȫ�֣�Vue.set(app.userInfo, 'address3', '����')
���飺Vue.set(app.list, 2, {id: '0101032',
 text:'����'})

4.1 Vue���ʹ���е�ϸ�ڵ�
1��html�涨tbody���������tr�������Ⱦ��ȥ�����<tr is='row'></tr> ��ʾtr��ǩʹ�õ���row��ģ��
2�����������data�ǣ�data������һ������
3��this.total = this.$refs.one.num + this.$refs.tow.num

4.2 ������������ݴ���
1���������������������⴫�����ݣ�����������������޸ĸ�������ݹ��������ݣ������ֻ���ø�������ݹ�����ֵ����ô���ֵ���Ը���
�����data���һ��������Ҳ���Ǵ��ݹ����Ĳ�����������ܹ�ֱ�ӵ��޸ģ�����Ҫ��¡���Ƴ���һ����������������������С�

4.3 �������У�����props����

4.4 �������ԭ���¼�
@click.native

4.5 �Ǹ��������Ĵ�ֵ
1��vuex
2�����߻���

4.6 Vue��ʹ�ò��

4.7 ��Vue�е���������

4.8 ��̬�����v-onceָ��
v-once ����̬���ʹ����v-once�Ժ�һ������Ⱦ�������棬�´�����ʱ�����û���ġ�����������Ⱦ�����̬���������ͻ�ÿ��������Ⱦ������������v-once���󽵵Ϳ���

5.1 Vue��css����ԭ��

5.2 ��Vue��ʹ��Animate.css��

5.3 ��Vue��ͬʱʹ�ù��ɺͶ���
type="transition" ����ʱ����transitionΪ��
:duration='10000' ����ʱ��Ϊ10��

5.4 vue�е�js������Velocity.js�Ľ��

5.5 Vue�ж��Ԫ�ػ�����Ĺ���

5.6 Vue�е��б����

5.7 Vue�еĶ�����װ

6.1 ��װnode�� git

6.2 ��Ŀ����ṹ����

6.3 ���ļ������Vue�е�·��

6.4 ��ҳӦ�� vs ��ҳӦ��

6.5 ��ʼ����Ŀ

7.1 ��ҳheader���򿪷�
��װstylus
cnpm i stylus -S
cnpm i stylus-loader -S

1rem :  px/font-size = 50px
rem = ҳ���С/body�����С

7.2 iconfont��ʹ�úʹ����Ż�

7.3 ��ҳ�ֲ�
��͸
.wrapper >>> .swiper-pagination-bullet-active
    background: #fff !important

.wrapper[data-v-01f4d902] .swiper-pagination-bullet-active {
  background: #f00 !important;
}

����
.wrapper .swiper-pagination-bullet-active[data-v-01f4d902] {
  background: #f00 !important;
}

git merge origin/index-swiper
������index-swiper��֧�Ĵ���ϲ������ط�֧����

7.4 ��ҳͼ������ҳ�沼��

7.5 ͼ�������߼�ʵ��
computed: ��ΰ�iconList��ֳɶ�ά����

7.6 �Ƽ��������
css min-height�� 0

7.7 ��ĩ���������

7.8 Ajax��ȡ��ҳ����
static �ǿɷ��ʵģ� src �ǲ��ɷ��ʵ�

7.9 ��ҳ����������ݴ���
Ϊʲôswiper Ĭ��Ϊ���һ����Ƭ

8.1 ����ѡ��ҳ��·������

8.2 �����򲼾�

8.3 �б���
.button-list[data-v-610a4ef1] {
    overflow: hidden;
    padding: 0.1rem;
}����overflow: hidden;
������ʾ��������ʵ

8.4 Better-scroll��ʹ�ü���ĸ����

8.5 ҳ��Ķ�̬������Ⱦ

8.6 �ֵ����������

clientY �� offsetTop������

8.7 �б��л������Ż� �ص� ��������

8.8 ��������ʵ��

8.9 ʹ��Vuexʵ�����ݹ���

      this.$router.push('/')

8-10 Vuex�ĸ߼�ʹ�ü�localStorage

import { mapState, mapMutations } from 'vuex'   // ��㷽��

1��mapState
computed: {
    ...mapState({
      currentCity: 'city'
    })  // ��������Ƕ���Ҳ����������
  },  {{this.currentCity}}
����
computed: {
    ...mapState(['city']),  // ��state���cityӳ�䵽city��Ժ�ֻ��Ҫ��this.city ���� this.$store.state.city����
  },  {{this.city}}

2��mapMutations
methods: {
...mapMutations(['changeCity'])
},

// this.$store.commit('changeCity', city)
      this.changeCity(city)


8-11 ʹ��keep-alive�Ż���ҳ����
ʹ��keep-alive������activated�������ڹ��Ӻ���������������ӿ��Խ����ж��Ƿ�����ӿ�

9-1 ����ҳ��̬·�ɼ�banner����

�����������ֲ�ͼ�����⣬һ�½����������ʾ��ʱ������������⣩
observeParents: true,	// ������Ԫ��
observer: true   		// ��������Ԫ��

��Ҫ��������Ԫ�غ�����Ԫ�ط���domԪ�ر仯��ʱ�򣬻��Զ�����ˢ��һ�Σ�ͨ������ˢ�¿��Խ����ȼ�������

9-2 ����ͼƬ����������

9-3 ʵ��Header��������Ч��

9-4 ��ȫ���¼��Ľ��
ʹ��keep-alive�ǣ��뿪���ҳ�����deactivated���ڹ��Ӻ���

9-5 ʹ�õݹ����ʵ�������б�

9-6 ʹ��Ajax��ȡ��̬����
��detailҳ�治������
<keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>

����������ҳ�滥��Ӱ��
scrollBehavior (to, from, savedPosition) {
    return { x: 0, y:100 }
  }
��ÿ���л�ҳ���ʱ��ص�����

